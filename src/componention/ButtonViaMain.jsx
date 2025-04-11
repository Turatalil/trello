import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { buttonViaMainSlice } from '../store/slices/ButtonViaMain';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const ButtonViaMain = () => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("")
  const { users } = useSelector((state) => state.basket)
  const dispatch = useDispatch()
  console.log(users);

  const handleAddClick = () => {
    setShowInput(true);
  };
  const handleClose = () => {
    setShowInput(false);
  };
  const clickChangeHandler = (e) => {
    setInputValue(e.target.value)
  }
  const addClickHandler = () => {
    const newComment = {
      name: inputValue,
      id: Date.now()
    }
    if (!inputValue.trim()) {
      return window.alert("Инпуттарды толтурунуз!")
    }
    dispatch(buttonViaMainSlice.actions.addSpisok(newComment))
    setShowInput(true)
    setInputValue("")
  }

  return (
    <Wrapper>
        {users.map((el) => (
      <BasketContainer>
          <GlobalMapDivContainer>
            <BasketContainerMapName key={el.id}>
              <h2>{el.name}</h2>
            </BasketContainerMapName>
            <MuiStyled>
              <MoreHorizIcon style={{cursor: "pointer"}}/>
            </MuiStyled>
          </GlobalMapDivContainer>
          <AddEsheButton>
          <span>+</span> Добавить список
        </AddEsheButton>

      </BasketContainer>
        ))}
      {!showInput && (
        <AddListButton onClick={handleAddClick}>
          <span>+</span> Добавить список
        </AddListButton>
      )}
      {showInput && (
        <InputContainer>
          <InputField onChange={clickChangeHandler} value={inputValue} type="text" placeholder="Введите имя колонки..." />
          <ButtonRow>
            <AddButton onClick={addClickHandler}>Добавить список</AddButton>
            <CloseButton onClick={handleClose}>✕</CloseButton>
          </ButtonRow>
        </InputContainer>
      )}
    </Wrapper>
  );
};

export default ButtonViaMain;

const MuiStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const GlobalMapDivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const BasketContainerMapName = styled.div`
  font-size: 10px;
  width: 200px;
  overflow-wrap: anywhere;
  color: #9FADBC;

`
const AddEsheButton = styled.button`
  border: none;
  margin-top: 10px;
  background-color: transparent;
  color: #9FADBC;
  padding: 9px 12px 9px 8px;
  width: 200px;
  display: flex;
  &&:hover{
    border: 1px solid;
    background-color: #c3c4c613;
    border-radius: 10px;
    padding: 9px 12px 9px 8px;
  }
`
const BasketContainer = styled.div`
  margin-top: 20px;
  background-color: #0c0c0c;
  border-radius: 10px;
  padding: 12px;
  width: 270px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  color: white;
`

const Wrapper = styled.div`
  margin-left: 20px;
  display: flex;
  gap: 20px;
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
  &&:hover {
    background-color: #e4dddd55;
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
