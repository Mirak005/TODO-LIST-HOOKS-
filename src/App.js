import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { text: "My First todo", id: 0 },
    { text: "My Second todo", id: 1 },
    { text: "My third todo", id: 2 },
  ]);

  //Add Todo
  const addTodo = (newText) => {
    const newTodo = {
      text: newText,
      id: todos.length,
    };

    setTodos([...todos, newTodo]);
  };
  //Delete Todo
  const removeTodo = (idOfTheTodoToRemove) => {
    setTodos(todos.filter((todo) => todo.id !== idOfTheTodoToRemove));
  };

  //edit todo
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div>
      <AddTodo addTodo={addTodo} />
      <TodoList editTodo={editTodo} todoList={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
