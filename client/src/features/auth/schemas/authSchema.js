import { z } from "zod";

const emailRules = z
  .string()
  .trim()
  .toLowerCase()
  .email("Enter a valid email address");

export const registerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: emailRules,
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const loginSchema = z.object({
  email: emailRules,
  password: z.string().min(1, "Password is required"),
});

export const forgotPasswordSchema = z.object({
  email: emailRules,
});