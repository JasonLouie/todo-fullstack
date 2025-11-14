import express from "express";
import * as todoController from "../controllers/todoController.js";

const router = express.Router();

router.route("/")
    .get(todoController.getAllTodos)
    .post(todoController.createTodo);

router.route("/:id")
    .get(todoController.getTodoById)
    .patch( todoController.modifyTodo)
    .delete(todoController.removeTodo);

export default router;