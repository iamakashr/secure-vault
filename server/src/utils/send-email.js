import nodemailer from "nodemailer";

import config from "../config/config.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: config.GOOGLE_USER,
    clientId: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    refreshToken: config.GOOGLE_REFRESH_TOKEN,
  },
});

export const sendEmail = async ({ to, subject, text, html }) => {
  const info = await transporter.sendMail({
    from: `"SecureVault" <${config.GOOGLE_USER}>`,
    to,
    subject,
    text,
    html,
  });

  console.log("Email accepted:", info.accepted);
  console.log("Email rejected:", info.rejected);
  console.log("Message ID:", info.messageId);
  console.log("Response:", info.response);

  return info;
};
