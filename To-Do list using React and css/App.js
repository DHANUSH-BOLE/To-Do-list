
// function App() {
//     return(
//         <p> this is the app.js</p>
//     )
//     }

import React, { useState } from 'react';
import './App.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [editableTaskId, setEditableTaskId] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState('');
  const [editedTaskDate, setEditedTaskDate] = useState('');


  // Function to handle adding a new task
  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
      setInputDate('');
    }
  };

  // Function to handle marking a task as completed
  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Function to handle removing a task
  const handleRemoveTask = (taskId) => {
    const filteredTasks = tasks.filter(task => task.id !== taskId);
    setTasks(filteredTasks);
    setEditableTaskId(null);
  };

  const handleEditTask = (taskId) => {
    setEditableTaskId(taskId);
  };

  const handleSaveTask = (taskId, newText, newDate) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, text: newText, date: newDate } : task
    );
    setTasks(updatedTasks);
    setEditableTaskId(null);
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <div className="input-container">
            <input
            type="text"
            placeholder="Add a new task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
            <input
          type="date"
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
        />
            <button onClick={handleAddTask} class="c-button"><span class="c-main">
    <span class="c-ico"><span class="c-blur"></span> <span class="ico-text">+</span></span>
    Add
  </span></button>
      </div>
      <div className="task-list">
            <ul>
                {tasks.map(task => (
                <li key={task.id} className={task.completed ? 'completed' : ''}>
                   {editableTaskId === task.id ? (
    <>
        <input
            type="text"
            placeholder="Fill this out don't leave empty"
            value={editedTaskText}
            onChange={(e) => setEditedTaskText(e.target.value)}
        />
        <input
            type="date"
            value={task.date}
            onChange={(e) => setEditedTaskDate(e.target.value)}
        />
        <button onClick={() => handleSaveTask(task.id, editedTaskText, editedTaskDate)}>Save</button>
    </>
) : (
    <>
        <span>{task.text}</span>
        <span>{task.date}</span>
    </>

              )}
              <div>
                <button onClick={() => handleToggleComplete(task.id)}>Toggle</button>
                <button onClick={() => handleEditTask(task.id)}>Edit</button>
                <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

// export default App;


    export default (<App/>)