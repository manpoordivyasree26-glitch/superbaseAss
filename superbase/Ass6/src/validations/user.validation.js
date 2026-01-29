import { body, param } from "express-validator";

export const createUserValidation = [
  body("name").notEmpty(),
  body("email").isEmail(),
  body("password").isLength({ min: 8 }),
  body("age").optional().isInt({ min: 18 })
];

export const updateUserValidation = [
  body("name").optional().notEmpty(),
  body("email").optional().isEmail(),
  body("password").optional().isLength({ min: 8 }),
  body("age").optional().isInt({ min: 18 })
];

export const userIdValidation = [
  param("id").notEmpty()
];
