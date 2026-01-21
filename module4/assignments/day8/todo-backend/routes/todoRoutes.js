import express from "express";
import { getTodos, getTodoById } from "../controllers/todoController.js";

const router = express.Router();

router.get("/todos", getTodos);
router.get("/todos/:id", getTodoById);

export default router;