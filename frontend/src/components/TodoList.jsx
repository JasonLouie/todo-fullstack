import Todo from "./Todo";

export default function TodoList({todos}) {

    const loaded = () => todos.length > 0 ?
        <ul>
            {todos.map(t => <Todo key={t._id} {...t} />)}
        </ul> : <p>No Todo Items</p>;

    return (
        <>
            {!todos ? <p>Waiting for todos...</p> : loaded()}
        </>
    );
}