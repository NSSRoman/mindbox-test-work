import styled from 'styled-components';
import FilterControls from "../FilterControls/FilterControls";
import React from "react";
import ITodo from '../Todos/types/todo';
import { FilterTypes } from '../Todos/enums/filterTypes';

const Btn = styled.button`
font-family: 'Open Sans', sans-serif;
color: Tan;
border: none;
outline: none;
cursor: pointer;
background-color: inherit;
`

const FooterWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 10px;
`

const Span = styled.span`
font-family: 'Open Sans', sans-serif;
color: Tan;
`

interface TodosFooterProps {
    todos: ITodo[];
    handleFiltredTodos: (filterType: string) => void;
    clearComplited: () => void;
}

const TodosFooter: React.FC<TodosFooterProps> = ({todos, handleFiltredTodos, clearComplited}) => {
    return (
        <FooterWrapper>
             <Span>{todos.filter((todo: ITodo) => !todo.isComplited).length} items left</Span>
             <FilterControls items={Object.keys(FilterTypes)} onFilter={handleFiltredTodos} />
             <Btn onClick={clearComplited}>Clear complited</Btn>
        </FooterWrapper>
    )
}

export default TodosFooter;