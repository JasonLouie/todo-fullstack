import { useEffect, useState } from 'react';

function App() {

    const [todos, setTodos] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
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
            {todos.map(t => 
                <li key={t._id}>
                    <input type="checkbox" checked={todos.completed} onChange={() => {}} />
                    {t.text}
                </li>
            )}
        </ul> : <p>No Todo Items</p>

    return (
        <>
            <h1>Todos</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" required={true} />
                <button>Submit</button>
            </form>
            {!todos ? <p>Waiting for todos...</p> : loaded()}
        </>
    )
}

export default App
