import React from "react";
import { useState } from "react";
import "./app.css";

function Card() {
  let [count, setCount] = useState(0);

  //   function increseCount() {
  //     setCount(count + 1);
  //   }

  const increseCount = () => setCount(count + 1);

  const decreaseCount = () => setCount(count - 1);

  return (
    <div className="container">
      <button className="btn" onClick={increseCount}>Increase</button>
      <p className="count">{count}</p>
      <button className="btn" onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

export default Card;
