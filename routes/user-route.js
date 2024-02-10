import express from "express"
import { addUser, loginUser } from "../controllers/user-controller.js";
const userRouter=express.Router();

userRouter.post("/signup",addUser)
userRouter.post("/login",loginUser)

export default userRouter;