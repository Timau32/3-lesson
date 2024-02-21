import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
  const { count } = useSelector((state) => state);

  const onIncrement = () => {};
  const onDecrement = () => {};
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrement}>INC</button>
      <button onClick={onDecrement}>DEC</button>
    </div>
  );
};

export default Counter;
