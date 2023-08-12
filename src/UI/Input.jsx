import React from "react";
import { styled } from "styled-components";

export const Input = ({ label,type, value, onChange, style, placeholder}) => {
  return (
    <>
      <label>{label}</label>
      <StyledInput type={type} value={value} onChange={onChange} style={style} placeholder={placeholder}/>
    </>
  );
};

const StyledInput= styled.input`
   
    padding: 8px;
  border-radius: 4px;
  width: 45%; 
  height: 4vh;

`
