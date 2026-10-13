import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";

const authRouter = Router();

/* PUBLIC ROUTES */

authRouter.post("/register", authController.register);
authRouter.post("/verify-email", authController.verifyEmail);
authRouter.post("/resend-email-otp", authController.resendEmailOtp);
authRouter.post("/login", authController.login);

export default authRouter;
