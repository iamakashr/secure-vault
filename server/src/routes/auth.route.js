import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const authRouter = Router();

/* PUBLIC ROUTES */

authRouter.post("/register", authController.register);
authRouter.post("/verify-email", authController.verifyEmail);
authRouter.post("/resend-email-otp", authController.resendEmailOtp);
authRouter.post("/login", authController.login);
authRouter.post("/forgot-password", authController.forgotPassword);
authRouter.post("/verify-resetOtp", authController.verifyResetOtp);
authRouter.post("/resend-reset-otp", authController.resendResetOtp);
authRouter.post("/reset-password", authController.resetPassword);
authRouter.get("/me", verifyJWT, authController.getMe);

export default authRouter;
