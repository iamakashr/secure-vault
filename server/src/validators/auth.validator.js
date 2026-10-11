import { z } from "zod";

const emailRules = z
  .string({ required_error: "Email is required" })
  .trim()
  .toLowerCase()
  .email("Please enter a valid email address");

export const registerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),

  email: emailRules,

  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export const resendEmailOtpSchema = z.object({
  email: emailRules,
});
