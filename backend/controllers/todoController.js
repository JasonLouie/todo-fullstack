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

export async function createTodo(req, res, next) {
    try {
        const { text } = req.body;
        const todo = await Todo.create({text});

        res.status(201).json(todo);
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

export async function removeTodo(req, res, next) {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if (!todo) {
            res.status(404).json({message: "Todo not found."});
        }
        res.sendStatus(204);
    } catch(err) {
        console.log(err);
        res.status(400).json(err.message);
    }
}

export async function modifyTodo(req, res, next) {
    try {
        const body = {};
        if ("text" in req.body) body.text = req.body.text;
        if ("completed" in req.body) body.completed = req.body.completed;
        
        const todo = await Todo.findByIdAndUpdate(req.params.id, body);
        if (!todo) {
            res.status(404).json({message: "Todo not found."});
        }
        res.sendStatus(204);
    } catch (err) {
        console.log(err);
        res.status(400).json(err.message);
    }  
}