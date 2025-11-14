import { useContext } from "react";
import { addTodo } from "../apicalls";
import TodoContext from "../context";

export default function Form({ handleSubmit, ref }) {

    const setTodos = useContext(TodoContext);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await addTodo({ text: ref.current.value });
            const newTodo = await response.json();
            setTodos(prev => [...prev, newTodo]);
            ref.current.value = "";
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" required={true} ref={ref} />
            <button>Submit</button>
        </form>
    );
}