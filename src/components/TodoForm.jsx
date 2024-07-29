import React, { useState } from "react";
import styled from "styled-components";
import Input from "./UI/Input";
import { Button } from "./UI/Button";

const TodoForm = ({ dispatch }) => {
  const [value, setValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch({ type: "EDIT", payload: { title: value, id: currentTodo.id } });
      setIsEditing(false);
      setCurrentTodo(null);
    } else {
      const newTodo = {
        id: new Date(),
        title: value,
        isChecked: false,
      };
      dispatch({ type: "ADD", payload: newTodo });
    }
    setValue("");
  };

  const handleInputValue = (e) => setValue(e.target.value);

  const deleteAllHandler = () => {
    dispatch({ type: "DELETE ALL" });
  };

  return (
    <Form onSubmit={submitHandler}>
      <StyledInput
        id="todo-input"
        type="textarea"
        required
        onChange={handleInputValue}
        value={value}
      />
      <ButtonContainer>
        <StyledButton type="submit">{isEditing ? "Изменить текст" : "Add"}</StyledButton>
        <StyledButton type="button" onClick={deleteAllHandler}>
          Delete All
        </StyledButton>
      </ButtonContainer>
    </Form>
  );
};

export default TodoForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledInput = styled(Input)`
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledButton = styled(Button)`
  margin: 5px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
