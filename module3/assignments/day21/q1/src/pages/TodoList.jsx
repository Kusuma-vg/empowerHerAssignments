import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/todoService";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos()
      .then((res) => setTodos(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List</h2>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>
              {todo.title}
            </Link>{" "}
            - {todo.completed ? "✅ Completed" : "❌ Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
