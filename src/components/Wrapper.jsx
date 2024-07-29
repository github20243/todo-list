import React, { useReducer, useState } from "react";
import styled from "styled-components";
import todoReducer from "./reducers/todo";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Modal from "./Modal";

const Wrapper = () => {
  const [state, dispatch] = useReducer(todoReducer, []);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState("");

  const editHandler = (todo) => {
    setIsEditing(true);
    setCurrentTodo(todo);
    setValue(todo.title);
    setIsModalOpen(true);
  };

  const handleInputValue = (e) => setValue(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch({ type: "EDIT", payload: { title: value, id: currentTodo.id } });
      setIsEditing(false);
      setCurrentTodo(null);
    } else {
      const newTodo = {
        id: new Date().getTime().toString(),
        title: value,
        isChecked: false,
      };
      dispatch({ type: "ADD", payload: newTodo });
    }
    setValue("");
    setIsModalOpen(false);
  };

  return (
    <Container>
      <TodoForm
        dispatch={dispatch}
        isEditing={isEditing}
        currentTodo={currentTodo}
        setIsEditing={setIsEditing}
        setCurrentTodo={setCurrentTodo}
      />
      <TodoList state={state} dispatch={dispatch} editHandler={editHandler} />
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        submitHandler={submitHandler}
        value={value}
        handleInputValue={handleInputValue}
      />
    </Container>
  );
};

export default Wrapper;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
