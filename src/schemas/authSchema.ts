import Joi from "joi";

export const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
});

export const signinSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
});