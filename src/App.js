import React from 'react';
import './App.css';
import { Headline } from './Exercise 2 - React Component tests';
import { Counter } from './Exercise 4 - React hooks tests';
import { Clock } from './Exercise 3 - Dynamic Component tests';

function App() {
  return (
    <div className="App">
      <Headline />
      <Clock />
      <Counter />
    </div>
  );
}

export default App;
