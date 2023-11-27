const express = require("express");

const router = express.Router();

let todoId = 1;
let todos = [{ id: 1, title: "🧹 청소하기", isDone: false }];

router.post("/", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      message: "Not exist title.",
    });
  }

  todoId++;

  const newTodo = { id: todoId, title, isDone: false };

  todos.push(newTodo);

  console.log(todos);

  return res.json({ todo: newTodo });
});

module.exports = router;
