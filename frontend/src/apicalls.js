const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getAllTodos = async () => await fetch(`${BASE_URL}/todos`);
export const addTodo = async (todo) => await fetch(`${BASE_URL}/todos`, {
    method: "POST",
    body: JSON.stringify(todo),
    headers: {
        "Content-Type": "application/json"
    }
});
export const deleteTodo = async (id) => await fetch(`${BASE_URL}/todos/${id}`, { method: "DELETE" });
export const modifyTodo = async (id, body) => await fetch(`${BASE_URL}/todos/${id}`, {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: {
        "Content-Type": "application/json"
    }
});