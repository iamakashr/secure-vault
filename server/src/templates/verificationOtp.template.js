export const getVerificationOtpEmail = (otp, expiryMinutes) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>Verify your SecureVault account</title>
      </head>

      <body>
        <h2>Verify your SecureVault account</h2>

        <p>Your verification code is:</p>

        <h1>${otp}</h1>

        <p>
          This code will expire in ${expiryMinutes} minutes.
        </p>

        <p>
          If you didn't create a SecureVault account,
          you can ignore this email.
        </p>
      </body>
    </html>
  `;
};
