const transport = require('../configs/mail-config');
const mailTemplate = require('../templates/mail-template');
const ErrorHandler = require('../utils/error-handler');

const isConnectionError = (error) =>
  ['ETIMEDOUT', 'ESOCKET', 'ECONNECTION', 'ECONNRESET'].includes(error?.code) ||
  /timeout|connection/i.test(error?.message || '');

const parseEmailFrom = value => {
  const text = String(value || '').trim().replace(/^"|"$/g, '');
  const match = text.match(/^(.*?)<([^>]+)>$/);
  if (!match) return {name: '', email: text};
  return {name: match[1].replace(/"/g, '').trim(), email: match[2].trim()};
};

const normalizeEmailFrom = value => String(value || '').trim().replace(/^"|"$/g, '');

const providerFromEnv = () => {
  const explicit = String(process.env.MAIL_PROVIDER || '').trim().toLowerCase();
  if (explicit) return explicit;
  if (process.env.RESEND_API_KEY) return 'resend';
  if (process.env.BREVO_API_KEY) return 'brevo';
  if (process.env.SENDGRID_API_KEY) return 'sendgrid';
  return '';
};

const postJson = async (url, headers, body) => {
  if (typeof fetch !== 'function') {
    throw new Error('HTTP mail provider requires Node 18+ fetch support.');
  }
  const response = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json', ...headers},
    body: JSON.stringify(body),
  });
  const raw = await response.text();
  let data = {};
  try {
    data = raw ? JSON.parse(raw) : {};
  } catch {
    data = {message: raw};
  }
  if (!response.ok) {
    const message = data.message || data.error || data.errors?.[0]?.message || raw || `HTTP ${response.status}`;
    const error = new Error(message);
    error.status = response.status;
    error.response = data;
    throw error;
  }
  return data;
};

const sendViaHttpProvider = async ({from, to, subject, text}) => {
  const provider = providerFromEnv();
  if (!provider) return null;

  const parsedFrom = parseEmailFrom(from);
  if (provider === 'resend') {
    return postJson(
      'https://api.resend.com/emails',
      {Authorization: `Bearer ${process.env.RESEND_API_KEY}`},
      {from: normalizeEmailFrom(from), to: [to], subject, text},
    );
  }
  if (provider === 'brevo') {
    return postJson(
      'https://api.brevo.com/v3/smtp/email',
      {'api-key': process.env.BREVO_API_KEY},
      {
        sender: {name: parsedFrom.name || undefined, email: parsedFrom.email},
        to: [{email: to}],
        subject,
        textContent: text,
      },
    );
  }
  if (provider === 'sendgrid') {
    return postJson(
      'https://api.sendgrid.com/v3/mail/send',
      {Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`},
      {
        personalizations: [{to: [{email: to}]}],
        from: {email: parsedFrom.email, name: parsedFrom.name || undefined},
        subject,
        content: [{type: 'text/plain', value: text}],
      },
    );
  }
  throw ErrorHandler.serverError(`Unsupported MAIL_PROVIDER '${provider}'. Use resend, brevo, or sendgrid.`);
};

class MailService {
  sendForgotPasswordMail = async (name, email, otp) => {
    const { subject, text } = mailTemplate.forgotPassword(name, otp);
    return this.sendMail(email, subject, text);
  };

  sendMail = async (to, subject, text) => {
    const mailOption = {
      from: process.env.EMAIL_FROM || process.env.SMTP_AUTH_USER || process.env.SMTP_USER,
      to,
      subject,
      text,
    };
    try {
      const httpInfo = await sendViaHttpProvider(mailOption);
      if (httpInfo) {
        console.log('Mail sent successfully via HTTP provider:', {
          provider: providerFromEnv(),
          id: httpInfo.id || httpInfo.messageId || 'ok',
        });
        return httpInfo;
      }
    } catch (error) {
      console.error('HTTP mail provider failed:', {
        provider: providerFromEnv(),
        status: error.status,
        response: error.response,
        message: error.message,
      });
      const providerMessage =
        error.response?.message ||
        error.response?.error ||
        error.response?.errors?.[0]?.message ||
        error.message;
      throw ErrorHandler.serverError(`Unable to send OTP email through ${providerFromEnv() || 'HTTP mail provider'}: ${providerMessage}`);
    }

    try {
      const info = await transport.sendMail(mailOption);
      console.log('Mail sent successfully:', info.response);
      return info;
    } catch (error) {
      console.error('Mail send failed:', {
        code: error.code,
        command: error.command,
        response: error.response,
        message: error.message,
      });
      if (isConnectionError(error)) {
        throw ErrorHandler.serverError('Email service timed out while connecting to SMTP. On Render use SMTP_PORT=465, SMTP_SECURE=true, and SMTP_REQUIRE_TLS=false. If it still times out, Render is blocking SMTP and you should use an HTTP mail provider such as Resend, Brevo, or SendGrid.');
      }
      if (['EAUTH', 'EENVELOPE'].includes(error?.code)) {
        throw ErrorHandler.serverError('Email authentication failed. Generate a new Gmail App Password and update SMTP_PASS / EMAIL_FROM.');
      }
      throw ErrorHandler.serverError('Unable to send OTP email. Please check email settings and try again.');
    }
  };
}

module.exports = new MailService();
