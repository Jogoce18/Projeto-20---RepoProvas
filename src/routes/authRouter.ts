import { Router } from "express";

import { signin,signup } from "../controllers/authController";
import { validateSchema } from "../middlewares/validateSchema";
import { signupSchema, signinSchema } from "../schemas/authSchema";


const authRouter = Router();

authRouter.post("/sign-in", validateSchema(signinSchema), signin);
authRouter.post("/sign-up", validateSchema(signupSchema), signup);

export default authRouter;