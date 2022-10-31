import { useEffect, useState } from "react";
import Form from "../Form/Form";
import TodosList from "../TodosList/TodosList";
import styled from 'styled-components';
import { FilterTypes } from './enums/filterTypes';
import TodosHeader from "../TodosHeader/TodosHeader";
import TodosFooter from "../TodosFooter/TodosFooter";
import React from 'react';
import ITodo from "./types/todo";

const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 100px;
`

const TodosContainer = styled.div`
width: 500px;
margin-top: 30px;
background-color: beige;
padding: 10px; 
overflow: hidden;
`

const H1 = styled.h1`
font-family: 'Open Sans', sans-serif;
font-size: 25px;
font-weight: 700;
`

const Todos: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [filtredTodos, setFiltredTodos] = useState<ITodo[]>([]);
    const [isVisibleListTodos, setIsVisibleListTodos] = useState<boolean>(false);
    const [filterType, setFilterType] = useState<string>('');
    const [todosHeader, setTodosHeader] = useState<string>('');

    useEffect(() => {
      switch (filterType) {
            case FilterTypes.Active:
                const activeTodos = todos.filter(todo => !todo.isComplited);
                setFiltredTodos(activeTodos);
                setTodosHeader('What needs to be done?');
                break;

            case FilterTypes.Complited:
                const complitedTodos = todos.filter(todo => todo.isComplited);
                setFiltredTodos(complitedTodos);
                setTodosHeader('Complited todos');
                break;

                case FilterTypes.All:
                setFiltredTodos(todos);
                setTodosHeader('All todos');
                break;
        
            default:
                setTodosHeader('Add todo');
                break;
        }
    },[todos, filterType])

    const formSubmitHandler = (todo: ITodo) => {
        setTodos(prevTodos => [...prevTodos, todo]);

        if (!filterType) {
          setFilterType(FilterTypes.All);
        }

        if (!isVisibleListTodos) {
            setIsVisibleListTodos(prev => !prev)
        }
    } 

    const toggleComplited = (id: string) => {
        const updatesTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplited = !todo.isComplited;
            }
            return todo;
        });

        setTodos(updatesTodos);
    }

    const handleFiltredTodos = (filterType: string) => {
        setFilterType(filterType)
    }

    const toggleVisibleTodos = () => {
        setIsVisibleListTodos(prev => !prev)
    }

    const clearComplited = () => {
      const clearTodos = todos.filter(todo => !todo.isComplited);
      setTodos(clearTodos);
    }

    return (
        <Section>
          <Form onAddTodo={formSubmitHandler}/>
          <H1>Todos</H1>
          <TodosContainer>
          <TodosHeader text={todosHeader} isVisibleListTodos={isVisibleListTodos} onToggleVisibleTodos={toggleVisibleTodos}/>  
          {todos.length ? <TodosList isVisibleListTodos={isVisibleListTodos} todos={filtredTodos} onToggleComplited={toggleComplited} /> : null}
          <TodosFooter todos={todos} clearComplited={clearComplited} handleFiltredTodos={handleFiltredTodos}/>
          </TodosContainer>
        </Section>
    )
}

export default Todos;