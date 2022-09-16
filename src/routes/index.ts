import { Router } from "express";
import authRouter from "./authRouter";
import testRouter from "./testsRouter";

const router = Router();

router.use(authRouter);
router.use(testRouter);
 
export default router;