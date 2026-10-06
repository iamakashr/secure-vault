import dotenv from "dotenv";

dotenv.config();

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is not defined In the environment variable");
}
if (!process.env.PORT) {
  throw new Error("PORT is not defined In the environment variable");
}
if (!process.env.CORS_ORIGIN) {
  throw new Error("CORS_ORIGIN is not defined In the environment variable");
}

if (!process.env.ACCESS_TOKEN_SECRET) {
  throw new Error(
    "ACCESS_TOKEN_SECRET is not defined In the environment variable",
  );
}
if (!process.env.ACCESS_TOKEN_EXPIRY) {
  throw new Error(
    "ACCESS_TOKEN_EXPIRY is not defined In the environment variable",
  );
}

if (!process.env.REFRESH_TOKEN_SECRET) {
  throw new Error(
    "REFRESH_TOKEN_SECRET is not defined In the environment variable",
  );
}
if (!process.env.REFRESH_TOKEN_EXPIRY) {
  throw new Error(
    "REFRESH_TOKEN_EXPIRY is not defined In the environment variable",
  );
}
/* if (!process.env.MAIL_USER) {
  throw new Error("MAIL_USER is not defined In the environment variable");
}
if (!process.env.MAIL_PASSWORD) {
  throw new Error("MAIL_PASSWORD is not defined In the environment variable");
} */
if (!process.env.GOOGLE_CLIENT_ID) {
  throw new Error(
    "GOOGLE_CLIENT_ID is not defined In the environment variable",
  );
}
if (!process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error(
    "GOOGLE_CLIENT_SECRET is not defined In the environment variable",
  );
}
if (!process.env.GOOGLE_REFRESH_TOKEN) {
  throw new Error(
    "GOOGLE_REFRESH_TOKEN is not defined In the environment variable",
  );
}
if (!process.env.GOOGLE_USER) {
  throw new Error("GOOGLE_USER is not defined In the environment variable");
}

const config = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY,
  // MAIL_USER: process.env.MAIL_USER,
  // MAIL_PASSWORD: process.env.MAIL_PASSWORD,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_REFRESH_TOKEN: process.env.GOOGLE_REFRESH_TOKEN,
  GOOGLE_USER: process.env.GOOGLE_USER,
};

export default config;
