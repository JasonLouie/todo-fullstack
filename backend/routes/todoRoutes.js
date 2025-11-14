import express from "express";
import * as todoController from "../controllers/todoController.js";

const router = express.Router();

router.get("/", todoController.getAllTodos);

export default router;