import React from "react";
import { Button } from "../UI/Button";
import { useTimer } from "../hooks/useTimer";
import { styled } from "styled-components";

const Timer = () => {
  const { time, start, stop, restart } = useTimer(120);
  return (
    <>
      {" "}
      <ContainerDiv>
        <Button onClick={start}>Start</Button>
        <Button onClick={stop}>Stop</Button>
        <Button onClick={restart}>Restart</Button>
      </ContainerDiv>
        <h1 style={{ textAlign: "center", color: "white" }}>
          Time: {time} seconds
        </h1>
    </>
  );
};

export default Timer;

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 6rem;
`;
