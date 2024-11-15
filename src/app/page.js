'use client'

import AddTodo from './components/Add-Todo.js'
import {useState, useEffect} from 'react';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if(savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])


  function handleAddTask (task) {
    setTasks([...tasks, task]);
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task, index) => index !== id));
  }

  return (
    <div className="flex items-center justify-center gap-10 h-screen w-screen flex-col bg-matte-black">
      <h1 className="text-5xl font-bold text-zinc-50 text-gray-400 ">To-Do List</h1>
      <AddTodo onAdd={handleAddTask}/>
          <ul className="space-y-3 w-96">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center bg-zinc-50  bg-gray-400 p-3 rounded-lg shadow-md text-matte-black">
            <span className = "font-medium">{task}</span>
            <button
              onClick={() => handleDeleteTask(index)}
              className="text-blue-500  focus:outline-none font-semi-bold"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
