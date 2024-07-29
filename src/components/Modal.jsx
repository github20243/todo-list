import React from "react";
import styled from "styled-components";
import Input from "./UI/Input"; 
import { Button } from "./UI/Button";

const Modal = ({ isModalOpen, setIsModalOpen, submitHandler, value, handleInputValue }) => {
  return (
    isModalOpen && (
      <ModalOverlay>
        <ModalContent>
          <h2>Редактировать задачу</h2>
          <form onSubmit={submitHandler}>
            <StyledInput
              id="modal-input"
              type="textarea"
              required
              onChange={handleInputValue}
              value={value}
            />
            <ButtonContainer>
              <StyledButton type="submit">Сохранить</StyledButton>
              <StyledButton type="button" onClick={() => setIsModalOpen(false)}>
                Отмена
              </StyledButton>
            </ButtonContainer>
          </form>
        </ModalContent>
      </ModalOverlay>
    )
  );
};

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 500px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const StyledInput = styled(Input)`
  width: 98%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
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
