import { useEffect, useRef, useState } from 'react';
import Todo from './components/Todo';
import { addTodo } from './apicalls';

function App() {

    const [todos, setTodos] = useState(null);
    const inputRef = useRef(null);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await addTodo({text: inputRef.current.value});
            const newTodo = await response.json();
            setTodos(prev => [...prev, newTodo]);
            inputRef.current.value = "";
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        async function getTodos() {
            const response = await fetch("http://localhost:8080/todos");
            const result = await response.json();
            console.log(result);
            setTodos(result);
        }
        getTodos();
    }, []);

    const loaded = () => todos.length > 0 ?
        <ul>
            {todos.map(t => <Todo key={t._id} {...t} setTodos={setTodos} />)}
        </ul> : <p>No Todo Items</p>

    return (
        <>
            <h1>Todos</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" required={true} ref={inputRef} />
                <button>Submit</button>
            </form>
            {!todos ? <p>Waiting for todos...</p> : loaded()}
        </>
    );
}

export default App
