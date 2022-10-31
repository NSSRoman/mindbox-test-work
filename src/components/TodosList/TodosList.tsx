import Todo from "../Todos/types/todo";
import TodosItem from "../TodosItem/TodosItem";
import styled from 'styled-components';
import React from "react";
import ITodo from "../Todos/types/todo";

const Ul = styled.ul<UlProps>`
display: flex;
flex-direction: column;
transition: all 500ms;
align-items: center;
transform: ${({$isVisible}) => $isVisible ? "translateY(0)" : "translateY(-200%)"};
`

interface UlProps {
    $isVisible: boolean;
}

interface TodosListProps {
    todos: ITodo[];
    isVisibleListTodos: boolean;
    onToggleComplited: (id: string) => void;
}

const TodosList: React.FC<TodosListProps> = ({todos, isVisibleListTodos, onToggleComplited}) => {
  return (
      <Ul $isVisible={isVisibleListTodos}>
          {todos.map((todo: Todo) => (
              <TodosItem key={todo.id} item={todo} onToggleComplited={onToggleComplited}/>
          ))}
      </Ul>
  )
}

export default TodosList;