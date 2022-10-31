import styled from 'styled-components';
import iconDone from '../../icons/done.png';
import React from 'react';
import ITodo from '../Todos/types/todo';

const Li = styled.li`
width: 100%;
padding: 10px;
background-color: white;
&:not(:last-child) {
  margin-bottom: 2px;
}
`

const TextBlock = styled.span<StyledProps>`
font-family: 'Open Sans', sans-serif;
color: Tan;
margin-left: 10px;
text-decoration: ${({$isComplited}) => $isComplited ? "line-through" : "none"};
`

const Label = styled.label`
display: flex;
align-items: center;
`
 
const Checkbox = styled.input.attrs({type: 'checkbox'})<StyledProps>`
appearance: none;
width: 1.6em;
  height: 1.6em;
  border-radius: 50%;
  margin-right: 0.5em;
  border: 0.15em solid gray;
  outline: none;
  cursor: pointer;
  background-color: white;
  background-image: ${({$isComplited}) => $isComplited && `url(${iconDone})`};
  background-repeat: no-repeat;
  background-position: center;
`

interface TodosItemProps {
  item: ITodo;
  onToggleComplited: (id: string) => void;
}

interface StyledProps {
  $isComplited: boolean;
}

const TodosItem: React.FC<TodosItemProps> = ({item: {id, text, isComplited}, onToggleComplited}) => {
    return (
      <Li>
        <Label>
        <Checkbox $isComplited={isComplited} type="checkbox" checked={isComplited} onChange={() => onToggleComplited(id)}/>
        <TextBlock $isComplited={isComplited}>{text}</TextBlock>
        </Label>
      </Li>
    )
}

export default TodosItem;