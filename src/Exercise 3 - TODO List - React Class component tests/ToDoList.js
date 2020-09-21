import React from "react";
import { ToDo } from "./ToDo";
import mockTodoList from "./mockTodoList.json";
import { findTodoItem } from "./findTodoItem";

export class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: mockTodoList };
  }

  handleToggle = (id) => () => {
    const { todos } = this.state;
    const todoItem = findTodoItem(todos, id);
    if (todoItem) {
      todoItem.completed = !todoItem.completed;
      this.setState({ todos });
    }
  };

  handleDelete = (id) => () => {
    const { todos } = this.state;
    const todoItem = findTodoItem(todos, id);
    if (todoItem) {
      this.setState({ todos: todos.filter((todoItem) => todoItem.id !== id) });
    }
  };

  render() {
    const { todos } = this.state;
    return (
      <ul>
        {todos.map((todo) => (
          <ToDo
            key={todo.id}
            {...todo}
            handleToggle={this.handleToggle(todo.id)}
            handleDelete={this.handleDelete(todo.id)}
          />
        ))}
      </ul>
    );
  }
}
