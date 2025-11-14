import { useEffect, useRef, useState } from 'react';
import { getAllTodos } from './apicalls';
import Form from './components/Form';
import TodoList from './components/TodoList';
import TodoContext from './context';

export default function App() {

    const [todos, setTodos] = useState(null);
    const inputRef = useRef(null);

    useEffect(() => {
        async function getTodos() {
            const response = await getAllTodos();
            const result = await response.json();
            setTodos(result);
        }
        getTodos();
    }, []);

    return (
        <>
            <h1>Todos</h1>
            <TodoContext.Provider value={setTodos}>
                <Form ref={inputRef} setTodos={setTodos}/>
                <TodoList setTodos={setTodos} todos={todos} />
            </TodoContext.Provider>
        </>
    );
}
