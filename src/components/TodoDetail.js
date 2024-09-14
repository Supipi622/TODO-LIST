import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../style/taskDetails.css';

const TodoDetail = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  // Fetch task details from localStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskToView = storedTasks.find(t => t._id === parseInt(taskId));
    setTask(taskToView);
  }, [taskId]);

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div className="task-details-container">
      <h1>Task Details</h1>
      <div>
        <strong>Title:</strong> {task.title}
      </div>
      <div>
        <strong>Description:</strong> {task.description}
      </div>
      <div>
        <strong>Due Date:</strong> {task.dueDate}
      </div>
      <div>
        <strong>Status:</strong> {task.completed ? 'Completed' : 'Pending'}
      </div>
      <button onClick={() => navigate(`/edit/${taskId}`)}>Edit</button>
      <button onClick={() => navigate('/')}>Back to Task List</button>
    </div>
  );
};

export default TodoDetail;
