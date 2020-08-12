import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleChange = (event) => setText(event.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      return alert("Please add a valid task");
    }
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <h1>Todo-APP!</h1>

      <div className="input-container">
        <input
          type="text"
          value={text}
          // onChange={(e)=> handleChange(e)}
          onChange={handleChange}
        />
        <button className="my-btn btn-primary">ADD</button>
      </div>
    </form>
  );
};

export default AddTodo;
