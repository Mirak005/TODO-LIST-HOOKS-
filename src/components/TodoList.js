import React from "react";
import TodoCard from "./TodoCard";

const TodoList = ({ todoList, removeTodo, editTodo }) => {
  //   const { todoList, removeTodo } = props;
  return (
    <ul className="todo-list">
      {todoList.map((todo) => (
        <TodoCard
          editTodo={editTodo}
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
