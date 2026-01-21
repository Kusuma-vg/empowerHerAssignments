import { todos } from "../models/todoModel.js";

export const getTodos = (req, res) => {
  try {
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch todos" });
  }
};

export const getTodoById = (req, res) => {
  try {
    const id = Number(req.params.id);
    const todo = todos.find(t => t.id === id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Error fetching todo" });
  }
};
