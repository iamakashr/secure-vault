import dotenv from "dotenv";

dotenv.config();

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is not defined In the environment variable");
}

if (!process.env.CORS_ORIGIN) {
  throw new Error("CORS_ORIGIN is not defined In the environment variable");
}

const config = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
};

export default config;
