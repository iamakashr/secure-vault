import Mailgen from "mailgen";
import nodeMailer from "nodemailer";
import config from "../config/config.js";

const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Secure Vault",
      link: "https://securevault.com",
    },
  });

  const emailText = mailGenerator.generatePlaintext(options.mailgenContent);

  const emailHtml = mailGenerator.generate(options.mailgenContent);

  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: config.MAIL_USER,
      pass: config.MAIL_PASSWORD,
    },
  });

  const mail = {
    from: config.MAIL_USER,
    to: options.email,
    subject: options.subject,
    text: emailText,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mail);
  } catch (error) {
    console.log("Error: ", error);
  }
};

const generateVerificationEmail = (name, verificationUrl) => {
  return {
    body: {
      name,
      intro:
        "Welcome to SecureVault! Your account has been created successfully.",

      action: {
        instructions:
          "Before you can start using SecureVault, please verify your email address by clicking the button below:",

        button: {
          color: "#6366F1",
          text: "Verify Email",
          link: verificationUrl,
        },
      },

      outro:
        "If you didn't create a SecureVault account, you can safely ignore this email. If you have any questions, our support team is here to help.",
    },
  };
};

const generatePasswordResetEmail = (name, resetUrl) => {
  return {
    body: {
      name,
      intro: "We received a request to reset your SecureVault password.",

      action: {
        instructions:
          "If you requested a password reset, click the button below to create a new password:",

        button: {
          color: "#6366F1",
          text: "Reset Password",
          link: resetUrl,
        },
      },

      outro:
        "This password reset link will expire soon. If you didn't request a password reset, you can safely ignore this email. Your password will remain unchanged.",
    },
  };
};

export { generateVerificationEmail, generatePasswordResetEmail, sendEmail };
