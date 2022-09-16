import { Router } from "express";

import { validateJWT } from "../middlewares/validateJWT";
import { create,getByTeacher,getByDiscipline,getDisciplines,getTeachers } from "../controllers/testsController";

import { testSchema } from "../schemas/testsSchema";
import { validateSchema } from "../middlewares/validateSchema";

const testRouter = Router();

testRouter.use(validateJWT);

testRouter.post("/test", validateSchema(testSchema),create);
testRouter.get("/test/teacher/:id", getByTeacher);
testRouter.get("/test/discipline/:id", getByDiscipline);

testRouter.get("/disciplines", getDisciplines);
testRouter.get("/teachers", getTeachers);

export default testRouter;