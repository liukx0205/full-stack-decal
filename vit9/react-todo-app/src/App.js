import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Todo App</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
