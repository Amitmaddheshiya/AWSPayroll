const transport = require('../configs/mail-config');
const mailTemplate = require('../templates/mail-template');
const ErrorHandler = require('../utils/error-handler');

const isConnectionError = (error) =>
  ['ETIMEDOUT', 'ESOCKET', 'ECONNECTION', 'ECONNRESET'].includes(error?.code) ||
  /timeout|connection/i.test(error?.message || '');

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
