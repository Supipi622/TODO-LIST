import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../style/taskDetails.css';

const TodoDetail = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    // Simulating task fetching based on taskId
    const tasks = [
      { _id: 1, title: "Task 1", description: "Description for Task 1", dueDate: "2024-09-20", completed: false },
      { _id: 2, title: "Task 2", description: "Description for Task 2", dueDate: "2024-09-21", completed: true },
      { _id: 3, title: "Task 3", description: "Description for Task 3", dueDate: "2024-09-22", completed: false }
    ];

    const task = tasks.find(t => t._id === parseInt(taskId));
    setTask(task);
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
