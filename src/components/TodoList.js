import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/TodoList.css';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const TodoList = () => {
  const navigate = useNavigate();
  
  // Sample tasks to replace backend data
  const [tasks, setTasks] = useState([

    { _id: 1, title: "Task 1", dueDate: "2024-09-20", completed: false },
    { _id: 2, title: "Task 2", dueDate: "2024-09-21", completed: true },
    { _id: 3, title: "Task 3", dueDate: "2024-09-22", completed: false }
    
  ]);

  const handleDelete = (taskId) => {
    console.log('Deleting task with id:', taskId);
    setTasks(tasks.filter((task) => task._id !== taskId));
  };

  const handleEdit = (taskId) => {
    console.log('Navigating to edit task with id:', taskId);
    navigate(`/edit/${taskId}`);
  };

  const handleDetailsClick = (taskId) => {
    console.log('Navigating to task details for taskId:', taskId);
    navigate(`/tasks/${taskId}`);
  };

  const toggleCompleted = (task) => {
    console.log('Toggling completed status for task:', task);
    setTasks(tasks.map((t) => (t._id === task._id ? { ...task, completed: !task.completed } : t)));
  };

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    return dateObject.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="app-container">
      <div className="task-list-container">
        <div className="taskheader">
          <h1>Task List</h1>
          <Link to="/addtodo" className="add-task-link">Add New Task</Link>
        </div>

        <div className="task-list">
          {tasks.map((task) => (
            <div key={task._id} onClick={() => handleDetailsClick(task._id)} className="task-row">
              <div className="task-info">
                <h3>{task.title}</h3>
                <p>{formatDate(task.dueDate)}</p>
              </div>
              <div className="task-status">
                <label className="toggle-checkbox">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={(e) => {
                      e.stopPropagation();
                      toggleCompleted(task);
                    }}
                  />
                  <span></span>
                </label>
                <span className={task.completed ? 'status-completed' : 'status-incomplete'}>
                  {task.completed ? 'Completed' : 'incomplete '}
                </span>
              </div>
              <div className="task-actions">
                <button onClick={(e) => { e.stopPropagation(); handleEdit(task._id); }} className="edit-button">
                  <EditIcon />
                </button>
                <button onClick={(e) => { e.stopPropagation(); handleDelete(task._id); }} className="delete-button">
                  <DeleteIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
