'use client'
import React, { useState } from 'react';
import './css/home.module.css';

function App() {
  const todos = [
    { id: 1, title: 'Comprar pão ', completed: false },
    { id: 2, title: 'Estudar React ', completed: true },
  ];

  const toggleComplete = (id: number) => {
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
  };

  return (
    <div className="app">
      <h1 className="title">To-Do List</h1>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span
              className={todo.completed ? 'todo-text completed' : 'todo-text'}
            >
              {todo.title}
            </span>
            <button
              className="toggle-button"
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.completed ? 'Desfazer' : 'Completar'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;