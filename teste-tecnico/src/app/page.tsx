import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Comprar leite", completed: false },
    { id: 2, text: "Estudar React", completed: true },
    { id: 3, text: "Ir à academia" }, 
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    }));
  };

  const addTask = (text) => {
    if (!text) {
      alert("A tarefa não pode ser vazia!");
      return;
    }
    setTasks([...tasks, { id: tasks.length + 1, text }]); 
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{ textDecoration: task.completed ? "line-through" : "none" }}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
            </span>
          </li>
        ))}
      </ul>
      <input type="text" id="new-task" placeholder="Nova Tarefa" />
      <button onClick={() => addTask(document.getElementById("new-task").value)}>
        Adicionar
      </button>
    </div>
  );
};

export default TodoList;
