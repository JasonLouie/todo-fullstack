import Todo from "../models/Todo.js";

export async function getAllTodos(req, res, next) {
    try {
        const todos = await Todo.find({});
        res.json(todos);
    } catch (err) {
        console.log(err);
        res.status(400).json(err.message);
    }
}

export async function getTodoById(req, res, next) {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            res.status(404).json({message: "Todo not found."});
        }
        res.json(todo);
    } catch (err) {
        console.log(err);
        res.status(400).json(err.message);
    }
}

export async function toggleCompleted(req, res, next) {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            res.status(404).json({message: "Todo not found."});
        }
        // Update then send
        res.json(todo);
    } catch (err) {
        console.log(err);
    }  
}