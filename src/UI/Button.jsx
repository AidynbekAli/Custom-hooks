import React from 'react'
import { styled } from 'styled-components'

export const Button = ({children, onClick}) => {
  return (
    <StyledBtn onClick={onClick}>{children}</StyledBtn>
  )
}

const StyledBtn = styled.button`
background-color: #626d88;
    color: #292328;
    font-size: 15px;
    padding: 5px;
    font-weight: 700;
    width: 120px;
    height: 60px;
    border: none;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    &:hover {
      background-color: #36368a;
      color: white;
    }
    &:active {
      background-color: #040436;
    }
`