import React from "react";
import { ToDo } from "../Exercise 3 - TODO List - React Class component tests/ToDo";
import mockTodoList from "../Exercise 3 - TODO List - React Class component tests/mockTodoList.json";
import { findTodoItem } from "../Exercise 3 - TODO List - React Class component tests/findTodoItem";

export const ToDoListWithHooks = () => {
  const [todos, setTodos] = React.useState(mockTodoList);
  const handleToggle = React.useCallback((id) => () => {
    const todoItem = findTodoItem(todos, id);
    if (todoItem) {
      todoItem.completed = !todoItem.completed;
      setTodos([...todos]);
    }
  }, [todos, setTodos]);
  const handleDelete = React.useCallback((id) => () => {
    const todoItem = findTodoItem(todos, id);
    if (todoItem) {
      setTodos(todos.filter((todoItem) => todoItem.id !== id));
    }
  }, [todos, setTodos]);
  return (
    <ul>
      {todos.map((todo) => (
        <ToDo
          key={todo.id}
          {...todo}
          handleToggle={handleToggle(todo.id)}
          handleDelete={handleDelete(todo.id)}
        />
      ))}
    </ul>
  );
};
