import React from 'react';
import './TodoItem.css';

function TodoItem({ task, index, onDelete }) {
  return (
    <li className="todo-item">
      <span>{task}</span>
      <button className="delete-button" onClick={() => onDelete(index)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
