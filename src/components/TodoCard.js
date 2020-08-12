import React from "react";
import EditModal from "./EditModal";

//props.todo = {text :"dsds" , id : 0}

const TodoCard = ({ todo, removeTodo, editTodo }) => (
  <li className="todo-card">
    <span className="todo-text"> {todo.text} </span>
    <button onClick={() => removeTodo(todo.id)} className="my-btn btn-danger">
      Delete
    </button>

    <EditModal todo={todo} editTodo={editTodo} />
  </li>
);

export default TodoCard;

// export default () => (
//   <li className="todo-card">
//     <span className="todo-text">My first task </span>
//     <button className="my-btn btn-danger">Delete</button>
//   </li>
// );
