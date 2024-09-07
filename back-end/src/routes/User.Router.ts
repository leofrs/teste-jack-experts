import { Router } from "express";
import { UserControllers } from "../controllers/User.Controller";

export const userRouter = Router();
const userControllers = new UserControllers();

userRouter.post("/api/user/register", userControllers.register);
userRouter.post("/api/user/login", userControllers.login);
