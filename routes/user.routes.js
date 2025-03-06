import { Router } from "express";

import { signUp, signIn } from "../controllers/user.controller.js";

const userRouter = Router();

//path:/api/v1/users

userRouter.post("/sign-up", signUp);

userRouter.post("/sign-in", signIn);

export default userRouter;