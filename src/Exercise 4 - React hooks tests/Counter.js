import React from "react";

export const Counter = () => {
  const [counter, setCounter] = React.useState(0);
  const increase = React.useCallback(() => {
    setCounter(counter + 1);
  }, [counter, setCounter]);
  const decrease = React.useCallback(() => {
    setCounter(counter - 1);
  }, [counter, setCounter]);

  return (
    <div>
      <button onClick={decrease}>-</button>
      <span>{` ${counter} `}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};
