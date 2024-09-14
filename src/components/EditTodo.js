import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../style/EdtTask.css';

const EditTodo = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();

  // Local state to manage the task data
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    completed: false,
  });

  // Handle changes to the form fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission (No backend required, so just navigate back)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any additional client-side updates or state management here
    navigate('/'); // Navigate back to the home page after "saving"
  };

  return (
    <div className="edit-task-container">
      <h1>Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate.split('T')[0]} // Adjusting to display only the date part
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
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default EditTodo;
