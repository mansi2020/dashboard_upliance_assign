import React, { useContext } from "react";
import { UserContext } from "../../Context/Context";
import "./Counter.css";

function Counter() {
  const { counter, setCounter } = useContext(UserContext);
  const increment = () => setCounter((preVal) => preVal + 1);
  const decrement = () => {
    if (counter != 0) {
      setCounter((preVal) => preVal - 1);
    } else {
      alert("Plz add counter.");
    }
  };
  const reset = () => setCounter(0);
  return (
    <div className="counter-container">
      <h1>Counter: {counter}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={reset} className="reset-btn">
          Reset
        </button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
