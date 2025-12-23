import { TodoProvider } from "../context/TodoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function Todos() {
  return (
    <TodoProvider>
      <h2>Todo App (Context API)</h2>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
}

export default Todos;
