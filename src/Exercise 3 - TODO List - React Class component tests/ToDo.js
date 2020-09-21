import React from "react";

export const ToDo = ({ completed, text, handleToggle, handleDelete }) => (
  <li>
    <label
      onClick={handleToggle}
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      {text}
    </label>
    <button onClick={handleDelete}>Delete</button>
  </li>
);
