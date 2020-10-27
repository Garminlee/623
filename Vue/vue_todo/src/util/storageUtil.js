const TODO_KEY = 'todos_key';
export default {
    saveTodos(todos) {
        window.localStorage.setItem(TODO_KEY, JSON.stringify(todos));
    },
    readTodos() {
        return JSON.parse(window.localStorage.getItem(TODO_KEY) || "[]");
    }
}