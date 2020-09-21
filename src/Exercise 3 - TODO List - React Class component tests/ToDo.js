import React from "react";

export const ToDo = ({ id, completed, text, handleToggle, handleDelete }) => (
  <li id={id}>
    <label
      onClick={handleToggle}
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      {text}
    </label>
    <button onClick={handleDelete}>Delete</button>
  </li>
);
