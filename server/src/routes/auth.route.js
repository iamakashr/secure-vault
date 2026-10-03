import { Router } from "express";
import * as authController from "../controllers/auth.controller.js"

const authRouter = Router();

/* PUBLIC ROUTES */

authRouter.post("/register", authController.register);

export default authRouter;
