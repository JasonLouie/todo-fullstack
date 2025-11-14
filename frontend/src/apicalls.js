export const getAllTodos = async () => await fetch("http://localhost:8080/todos");
export const addTodo = async (todo) => await fetch("http://localhost:8080/todos", {
    method: "POST",
    body: JSON.stringify(todo),
    headers: {
        "Content-Type": "application/json"
    }
});
export const deleteTodo = async (id) => await fetch(`http://localhost:8080/todos/${id}`, { method: "DELETE" });
export const modifyTodo = async (id, body) => await fetch(`http://localhost:8080/todos/${id}`, {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: {
        "Content-Type": "application/json"
    }
});