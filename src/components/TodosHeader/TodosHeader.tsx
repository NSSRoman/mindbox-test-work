import styled from 'styled-components';
import btnIcon from '../../icons/icon-arrow.png';
import React from 'react';

const TodosHeaderWrapper = styled.div`
display: flex;
align-items: center;
margin-bottom: 5px;
padding: 5px;
background-color: white;
`

const Btn = styled.button<BtnProps>`
width: 25px;
height: 25px;
cursor: pointer;
background-color: inherit;
border: none;
outline: none;
transition: all 500ms;
background-image: url(${btnIcon});
transform: ${({$isVisible}) => $isVisible ? "rotate(90deg)" : "rotate(0deg)"};
`

const Span = styled.span`
font-family: 'Open Sans', sans-serif;
color: Tan;
`

interface BtnProps {
  $isVisible: boolean;
}

interface TodosHeaderProps {
  text: string;
  isVisibleListTodos: boolean;
  onToggleVisibleTodos: () => void;
}

const TodosHeader: React.FC<TodosHeaderProps> = ({text, isVisibleListTodos, onToggleVisibleTodos}) => {
    return (
        <TodosHeaderWrapper>
          <Btn disabled={text === 'Add todo'} $isVisible={isVisibleListTodos} onClick={onToggleVisibleTodos}></Btn>
          <Span>{text}</Span>
        </TodosHeaderWrapper>
    )
}

export default TodosHeader;