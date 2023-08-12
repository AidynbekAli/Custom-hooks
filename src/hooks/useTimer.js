import { useState, useEffect, useRef } from 'react';

export  const useTimer = (initialTime = 60) => {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isActive]);

  const start = () => {
    setIsActive(true);
  };

  const stop = () => {
    setIsActive(false);
  };

  const restart = () => {
    setIsActive(false);
    setTime(initialTime);
    setIsActive(true);
  };

  
    if (time === 0) {
      stop();
    }
  

  return { time, start, stop, restart };
};
