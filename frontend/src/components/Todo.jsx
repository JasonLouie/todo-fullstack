import { useState } from "react";
import { deleteTodo, modifyTodo } from "../apicalls";

export default function Todo({ _id, text, completed, setTodos }) {
    const [edit, setEdit] = useState(false);
    const [todoText, setTodoText] = useState(text);

    async function handleDelete(id) {
        try {
            await deleteTodo(id);
            setTodos(prev => prev.filter(p => p._id !== id));
        } catch (err) {
            console.log(err);
        }
    }

    async function toggleComplete(id, checked) {
        try {
            await modifyTodo(id, { completed: checked });
            setTodos(prev => prev.map(p => p._id === id ? {...p, completed: checked} : p));
        } catch (err) {
            console.log(err);
        }
    }

    async function handleModifyText(id) {
        try {
            await modifyTodo(id, { text: todoText });
            setTodos(prev => prev.map(p => p._id === id ? {...p, text: todoText} : p));
        } catch (err) {
            console.log(err);
        }
        setEdit(!edit);
    }

    return (
        <li key={_id}>
            <input type="checkbox" checked={completed} onChange={(e) => toggleComplete(_id, e.target.checked)} />
            {edit ?
                <>
                    <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
                    <button onClick={() => handleModifyText(_id)} disabled={todoText === text}>Save</button>
                </> : 
                <>
                    <span>{text}</span>
                    <button onClick={() => handleDelete(_id)}>x</button>
                </>
            }
            <button onClick={() => setEdit(!edit)}>{edit ? "Cancel" : "Edit"}</button>
        </li>
    );
}