import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  type: string;
  color: string;
  children: string;
}

interface SyledBtn {
  $color: string;
}

const Btn = styled.button<SyledBtn>`
font-family: 'Open Sans', sans-serif;
padding: 10px;
border: none;
color: Tan;
background-color: ${({$color}) => $color};
`

const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({type, color, children}) => {
  return (
      <Btn type={type} $color={color}>
          {children}
      </Btn>
  )
}

export default Button;