import styled from 'styled-components';
import React from 'react';

const Btn = styled.button`
font-family: 'Open Sans', sans-serif;
color: Tan;
border: none;
padding: 5px;
outline: none;
cursor: pointer;
background-color: inherit;
&:focus {
    border:1px solid palevioletred;
    border-radius: 4px;
}
`

interface FilterBtnProps {
    name: string;
    onFilter: (name: string) => void;
  }

const FilterBtn: React.FC<FilterBtnProps> = ({name, onFilter}) => {
    return (
        <Btn type="button" name={name} onClick={() => onFilter(name)}>{name}</Btn>
    )
}

export default FilterBtn;