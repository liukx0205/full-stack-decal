const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


let todos = [];

app.get('/todos', (req, res) => {
    res.json(todos);
  });

app.post('/todos', (req, res) => {
    const { task } = req.body;
    if (!task) {
      return res.status(400).json({ error: 'Task is required' });
    }
    const newTodo = { id: todos.length + 1, task };
    todos.push(newTodo);
    res.status(201).json(newTodo);
  });
    
app.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const { task } = req.body;
    const todo = todos.find((t) => t.id === parseInt(id));
    if (!todo) {
      return res.status(404).json({ error: 'To-Do item not found' });
    }
    if (!task) {
      return res.status(400).json({ error: 'Task is required' });
    }
    todo.task = task;
    res.json(todo);
  });

app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    const initialLength = todos.length;
    todos = todos.filter((t) => t.id !== parseInt(id));
    if (todos.length === initialLength) {
      return res.status(404).json({ error: 'To-Do item not found' });
    }
    res.status(204).send();
  });
  
  