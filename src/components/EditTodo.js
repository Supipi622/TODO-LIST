import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../style/EditTodo.css';

const EditTodo = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    completed: false,
  });

  // Load the task to be edited from localStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskToEdit = storedTasks.find(t => t._id === parseInt(taskId));
    if (taskToEdit) {
      setTask(taskToEdit);
    }
  }, [taskId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fetch existing tasks
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Update the edited task
    const updatedTasks = storedTasks.map((t) =>
      t._id === parseInt(taskId) ? { ...task } : t
    );

    // Save updated tasks to localStorage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    // Navigate back to the task list page
    navigate('/');
  };

  return (
    <div className="edit-task-container">
      <h1>Edit Todo.....!!!!</h1>
      <form onSubmit={handleSubmit} className="edit-form">

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
          />
        </div>

        <div className="form-group">
          <label>Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate.split('T')[0]}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="completed"
              checked={task.completed}
              onChange={handleChange}
            />
            Completed
          </label>
        </div>

        <button type="submit"  className="submit-button ">Update Task</button>
      </form>
    </div>
  );
};

export default EditTodo;
