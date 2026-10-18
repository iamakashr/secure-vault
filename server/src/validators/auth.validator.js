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

export const loginSchema = z.object({
  email: emailRules,
  password: z.string().min(1, "Password is required"),
});

export const forgotPasswordSchema = z.object({
  email: emailRules,
});

export const verifyResetOtpSchema = z.object({
  email: emailRules,
  otp: z.string().regex(/^\d{6}$/, "Please enter a valid 6-digit OTP"),
});

export const resendResetOtpSchema = z.object({
  email: emailRules,
});

export const resetPasswordSchema = z.object({
  email: emailRules,
  newPassword: z.string().min(8, "Password must be at least 8 characters long"),
});
