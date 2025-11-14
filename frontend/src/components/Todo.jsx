import { useRef, useState } from "react";

export default function Todo({ _id, text, completed, setTodos }) {
    const [edit, setEdit] = useState(false);
    const inputRef = useRef(null);

    async function handleDelete(id) {
        try {
            await fetch(`http://localhost:8080/todos/${id}`, { method: "DELETE" });
            setTodos(prev => prev.filter(p => p._id !== id));
        } catch (err) {
            console.log(err);
        }
    }

    async function toggleComplete(id, checked) {
        try {
            await fetch(`http://localhost:8080/todos/${id}`, {
                method: "PATCH",
                body: JSON.stringify({ completed: checked }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setTodos(prev => prev.map(p => p._id === id ? {...p, completed: checked} : p));
        } catch (err) {
            console.log(err);
        }
    }

    async function handleModifyText(id) {
        if (text !== inputRef.current.value) {
            try {
                await fetch(`http://localhost:8080/todos/${id}`, {
                    method: "PATCH",
                    body: JSON.stringify({ text: inputRef.current.value }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                setTodos(prev => prev.map(p => p._id === id ? {...p, text: inputRef.current.value} : p));
            } catch (err) {
                console.log(err);
            }
            setEdit(!edit);
        }
    }

    return (
        <li key={_id}>
            <input type="checkbox" checked={completed} onChange={(e) => toggleComplete(_id, e.target.checked)} />
            {edit ?
                <>
                    <input type="text" defaultValue={text} ref={inputRef} />
                    <button onClick={() => handleModifyText(_id)}>Save</button>
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