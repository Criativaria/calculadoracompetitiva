
import { Router } from "express";
import { userRouter } from "./user-routes";

const appRoute = Router();

appRoute.use("/user", userRouter)

export { appRoute }