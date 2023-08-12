import { useState } from "react";

export const useCounter = (
  inConter = 0,
  { incrementLevel = 1, decrementLevel = 1 }
) => {
  const [counter, setCounter] = useState(inConter);

  const increment = () => {
    setCounter(prevCounter=> prevCounter + incrementLevel);
  };
  const decrement = () => {
    if (counter === 0) {
      return counter;
    }
    setCounter(prevCounter=> prevCounter - decrementLevel);
  };
  const reset = () => {
    setCounter(inConter);
  };

  return {
    onIncrement: increment,
    onDecrement: decrement,
    onInCounter: reset,
    counter,
  };
};
