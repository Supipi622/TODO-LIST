const TodoItem = ({ todo, toggleCompletion, deleteTodo }) => {
    return (
      <li>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
        <button onClick={toggleCompletion}>
          {todo.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
        </button>
        <button onClick={deleteTodo}>Delete</button>
      </li>
    );
  };
  
  export default TodoItem;
  