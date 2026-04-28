import React, { useState } from 'react';
import './App.css';
import TodoItem from './TodoItem';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleAddTask() {
    if (inputValue.trim() === '') return;
    setTasks([...tasks, inputValue.trim()]);
    setInputValue('');
  }

  function handleDeleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div className="app-container">
      <h1>My To-Do List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a new to-do item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="add-button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            index={index}
            onDelete={handleDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
