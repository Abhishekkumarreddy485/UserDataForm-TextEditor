import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container" style={{ background: `rgba(0, 0, 255, ${count / 10})` }}>
      <h1 className="counter-title">Counter: {count}</h1>
      <div className="button-group">
        <button className="counter-button" onClick={() => setCount(count + 1)}>Increment</button>
        <button className="counter-button" onClick={() => setCount(count - 1)}>Decrement</button>
        <button className="counter-button" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
