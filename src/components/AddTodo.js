import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/AddTaskForm.css';

const AddTodo = () => {
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    completed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fetch existing tasks from localStorage
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Add the new task with a unique _id
    const newTask = { ...task, _id: storedTasks.length ? storedTasks[storedTasks.length - 1]._id + 1 : 1 };
    const updatedTasks = [...storedTasks, newTask];

    // Update localStorage with the new task
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    // Navigate back to the task list page
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-group">
        <label>Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group checkbox-group">
        <label>
          Completed
          <input
            type="checkbox"
            name="completed"
            checked={task.completed}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit" className="submit-button">Save</button>
    </form>
  );
};

export default AddTodo;
