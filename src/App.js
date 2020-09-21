import React from 'react';
import { Headline } from './Exercise 2 - Simple React Component tests';
import { Counter } from './Exercise 4 - React hooks tests';
import { Clock } from './Exercise 5 - Dynamic Component tests';
import { ToDoList } from './Exercise 3 - TODO List - React Class component tests/ToDoList';
import { ToDoListWithHooks } from './Exercise 3 - TODO List - React Hooks tests/ToDoListWithHooks'

function App() {
  return (
    <div className="App">
      <Headline />
      <Clock />
      <Counter />
      <ToDoList />
      <ToDoListWithHooks />
    </div>
  );
}

export default App;
