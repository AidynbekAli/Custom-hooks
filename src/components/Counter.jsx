import React from "react";
import { useCounter } from "../hooks/useCounter";
import { styled } from "styled-components";
import { Button } from "../UI/Button";

const Counter = () => {
  const counterLvl = useCounter(0, { incrementLevel: 4, decrementLevel: 2 });
  return (
    <>
      <h1 style={{ textAlign: "center", color:"white" }}>{counterLvl.counter}</h1>
      <ContainerBtn>
        <Button onClick={counterLvl.onIncrement}>INCREMENT</Button>
        <Button onClick={counterLvl.onDecrement}>DECREMENT</Button>
        <Button onClick={counterLvl.onInCounter}>RESET</Button>
      </ContainerBtn>
    </>
  );
};

export default Counter;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
 
`;
