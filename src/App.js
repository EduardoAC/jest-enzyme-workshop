import React from 'react';
import './App.css';
import { MyComponent } from './components/MyComponent';
import { Clock } from './components/Clock';
import { Counter } from './components/Counter';

function App() {
  return (
    <div className="App">
      <MyComponent />
      <Clock />
      <Counter />
    </div>
  );
}

export default App;
