import { useState } from "react";
import shortid from "shortid";
import Todo from "../Todos/types/todo";
import Button from "../Buttons/Button";
import styled from 'styled-components';
import React from "react";
import ITodo from "../Todos/types/todo";

const StyledForm = styled.form`
z-index: 1;
`

const StyledInput = styled.input`
font-family: 'Open Sans', sans-serif;
font-size: 18px;
padding: 10px;
margin: 10px;
background: beige;
border: none;
border-radius: 3px;
::placeholder {
  color: Tan;
}
`

interface FormProps {
    onAddTodo: (todo: ITodo) => void;
};

const Form: React.FC<FormProps> = ({onAddTodo}) => {
    const [todoText, setTodoTest] = useState('');

    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        const text = event.currentTarget.value;
        setTodoTest(text);
    }

    const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        const todo: Todo = {
            id: shortid.generate(),
            text: todoText,
            isComplited: false
        }
        onAddTodo(todo);
        formReset();
    }

    const formReset = () => setTodoTest('')

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledInput type="text" autoComplete="off" value={todoText} placeholder="Add todo" onChange={handleInputChange}/>
            <Button type="submit" color="LightYellow">Add todo</Button>
        </StyledForm>
    )
}

export default Form;