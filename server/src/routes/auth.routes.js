import { Router } from "express";
import * as authCountroller from "../controllers/auth.controllers.js"

const authRouter = Router();

/* post api/auth/register */

authRouter.post("/register", authCountroller.register);

export default authRouter;
