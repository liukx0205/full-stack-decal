import React from 'react';
import { useSelector } from 'react-redux';

function TaskList() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <li key={index} className="list-group-item">
          {task}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
