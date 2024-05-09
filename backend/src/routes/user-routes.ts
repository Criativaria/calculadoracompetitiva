import { Router } from "express";
import { UserController } from "../controllers/user-controllers";

const userRouter = Router()

userRouter.get('/score', UserController.getUserScore)
userRouter.post('/signIn', UserController.signIn)

export { userRouter }