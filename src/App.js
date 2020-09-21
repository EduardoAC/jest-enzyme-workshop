import React from 'react';
import './App.css';
import { MyComponent } from './components/MyComponent';
import { Clock } from './components/Clock';

function App() {
  return (
    <div className="App">
      <MyComponent />
      <Clock />
    </div>
  );
}

export default App;
