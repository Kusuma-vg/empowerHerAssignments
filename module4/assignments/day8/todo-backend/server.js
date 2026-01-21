import express from "express";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();
const PORT = 5000;

app.use(express.json());

// 👇 VERY IMPORTANT
app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
