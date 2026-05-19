const nodemailer = require("nodemailer");

const toBool = (value, defaultValue = false) => {
  if (value === undefined) return defaultValue;
  return ["true", "1", "yes", "y"].includes(String(value).trim().toLowerCase());
};

const toNumber = (value, defaultValue) => {
  const match = String(value ?? "").match(/\d+/);
  const number = match ? Number(match[0]) : NaN;
  return Number.isFinite(number) ? number : defaultValue;
};

const smtpUser = process.env.SMTP_USER || process.env.SMTP_AUTH_USER || process.env.EMAIL_USER;
const smtpPass = process.env.SMTP_PASS || process.env.SMTP_AUTH_PASS || process.env.EMAIL_PASS;
const host = process.env.SMTP_HOST || "smtp.gmail.com";
const port = toNumber(process.env.SMTP_PORT, 587);
const secure = toBool(process.env.SMTP_SECURE, port === 465);
const requireTLS = secure ? false : toBool(process.env.SMTP_REQUIRE_TLS, true);

const transporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE || undefined,
  host,
  port,
  secure,
  requireTLS,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
  tls: {
    rejectUnauthorized: false,
  },
  family: 4,
  connectionTimeout: toNumber(process.env.SMTP_CONNECTION_TIMEOUT, 60000),
  greetingTimeout: toNumber(process.env.SMTP_GREETING_TIMEOUT, 60000),
  socketTimeout: toNumber(process.env.SMTP_SOCKET_TIMEOUT, 90000),
});

module.exports = transporter;
