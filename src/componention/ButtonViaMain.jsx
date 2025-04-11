import React, { useState } from 'react';
import styled from 'styled-components';

const ButtonViaMain = () => {
    const [showInput, setShowInput] = useState(false);

    const handleAddClick = () => {
        setShowInput(true);
    };

    const handleClose = () => {
        setShowInput(false);
    };

    return (
        <Wrapper>
            {!showInput && (
                <AddListButton onClick={handleAddClick}>
                    <span>+</span> Добавить список
                </AddListButton>
            )}

            {showInput && (
                <InputContainer>
                    <InputField type="text" placeholder="Введите имя колонки..." />
                    <ButtonRow>
                        <AddButton>Добавить список</AddButton>
                        <CloseButton onClick={handleClose}>✕</CloseButton>
                    </ButtonRow>
                </InputContainer>
            )}
        </Wrapper>
    );
};

export default ButtonViaMain;


const Wrapper = styled.div`
  margin-left: 20px;
`;

const AddListButton = styled.button`
  background-color: #d1c5c557;
  color: white;
  font-size: 18px;
  border: 1px solid;
  border-radius: 15px;
  padding: 20px;
  width: 280px;
  height: 23px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  cursor: pointer;
  :hover {
    background-color: #e4dddd55;
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

const InputContainer = styled.div`
margin-top: 20px;
  background-color: #0c0c0c;
  border-radius: 10px;
  padding: 12px;
  width: 270px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
`;

const InputField = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: none;
  outline: none;
  font-size: 14px;
  background-color: #1f1f1f;
  color: white;
  border: 1px solid #3d3d3d;
  margin-bottom: 10px;
`;

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AddButton = styled.button`
  background-color: #579dff;
  border: none;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  line-height: 1;
`;
