import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} from "../controllers/user.controller.js";

import {
  createUserValidation,
  updateUserValidation,
  userIdValidation
} from "../validations/user.validation.js";

const router = express.Router();

router.post("/", createUserValidation, createUser);
router.get("/", getAllUsers);
router.get("/:id", userIdValidation, getUserById);
router.put("/:id", userIdValidation, updateUserValidation, updateUser);
router.delete("/:id", userIdValidation, deleteUser);

export default router;
