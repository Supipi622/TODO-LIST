import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleCompletion, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          toggleCompletion={() => toggleCompletion(index)}
          deleteTodo={() => deleteTodo(index)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
