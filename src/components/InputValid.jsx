import React from "react";
import useInput from "../hooks/useInput";
import { Input } from "../UI/Input";
import { styled } from "styled-components";

const isValidEmail = (email) => {
  if (!email) {
    return "Email is required";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Invalid email format";
  }

  return "";
};

const EmailInput = () => {
  const emailInput = useInput("", isValidEmail);

  const inputStyles = {
    border: emailInput.error ? "2px solid red" : "3px solid #0aef3b",
    padding: "5px",
  };

  return (
    <>
    
      <ContInput>
        <Input
          type="email"
          value={emailInput.value}
          onChange={emailInput.handleChange}
          style={inputStyles}
          placeholder="Email entered..."
        />
      </ContInput>
      {emailInput.error && (
        <p style={{ color: "red", textAlign: "center" }}>{emailInput.error}</p>
      )}
    </>
  );
};

export default EmailInput;

const ContInput = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6rem;
`;
