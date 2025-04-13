
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addList, addCardToList, removeCardFromList, removeList, updateListName, updateCardName } from "../store/slices/ButtonViaMain";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

// Стилдер
const Wrapper = styled.div`
  margin-left: 20px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 10px;
`;

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
  max-height: 400px;
`;

const CardsContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-track {
    background-color: #333;
  }
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
  &:hover {
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

const InputFieldTwoStyle = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: none;
  outline: none;
  width: 256px;
  height: 76px;
  font-size: 14px;
  background-color: #1f1f1f;
  color: white;
  border: 1px solid #3d3d3d;
  margin-bottom: 10px;
  overflow-wrap: anywhere;
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

const Buttons = styled.div`
  display: flex;
  gap: 2em;
  align-items: center;
`;

const ButtonsButtonBit = styled.button`
  background-color: #579dff;
  border: none;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
`;

const MuiStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputHandlerClick = styled.div`
  border: none;
  border-radius: 12px;
  padding: 8px;
  margin: 5px 0;
  &:hover {
    background-color: #b0b0b031;
    transition: 0.7s ease-in-out;
  }
  h2 {
    margin: 0;
    font-size: 14px;
    word-break: break-word;
  }
`;

const GlobalMapDivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BasketContainerMapName = styled.div`
  font-size: 10px;
  width: 200px;
  overflow-wrap: anywhere;
  color: #9fadbc;
`;

const AddEsheButton = styled.button`
  border: none;
  margin-top: 10px;
  margin-bottom: 19px;
  background-color: transparent;
  color: #9fadbc;
  padding: 9px 12px 9px 8px;
  width: 200px;
  display: flex;
  &:hover {
    border: 1px solid;
    background-color: #c3c4c613;
    border-radius: 10px;
    padding: 9px 12px 9px 8px;
  }
`;

const ButtonRowTow = styled.div`
  display: flex;
  flex-direction: column;
`;

const EditButton = styled.button`
  background-color: #579dff;
  border: none;
  color: white;
  padding: 4px 10px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #4681db;
  }
`;

const DeleteButton = styled.button`
  background-color: #ff4d4f;
  border: none;
  color: white;
  padding: 4px 10px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #d9363e;
  }
`;

const EditInput = styled.input`
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #3d3d3d;
  background-color: #1f1f1f;
  color: white;
  width: 100%;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Menu = styled.div`
  position: absolute;
  background-color: #1f1f1f;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  z-index: 10;
  display: flex;
  flex-direction: column;
  padding: 5px 0;
`;

const MenuItem = styled.button`
  background: none;
  border: none;
  color: white;
  padding: 8px 12px;
  text-align: left;
  cursor: pointer;
  &:hover {
    background-color: #579dff;
  }
`;

// Компонент
const ButtonViaMain = () => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputDobValue, setInputDobValue] = useState("");
  const [activeListId, setActiveListId] = useState(null);
  const [menuOpen, setMenuOpen] = useState(null);
  const [editingListId, setEditingListId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [editingCard, setEditingCard] = useState(null);
  const [editCardValue, setEditCardValue] = useState("");

  const { users } = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  const handleAddClick = () => {
    setShowInput(true);
  };

  const openCardInput = (id) => {
    setActiveListId(id);
  };

  const handleCardInputChange = (e) => {
    setInputDobValue(e.target.value);
  };

  const handleCardAdd = (listId) => {
    if (!inputDobValue.trim()) {
      alert("Введите название карточки!");
      return;
    }
    const newCard = {
      id: Date.now(),
      name: inputDobValue,
    };
    dispatch(addCardToList({ listId, newCard }));
    setInputDobValue("");
    setActiveListId(null);
  };

  const handleClose = () => {
    setShowInput(false);
    setInputValue("");
  };

  const handleListAdd = () => {
    if (!inputValue.trim()) {
      alert("Инпуттарды толтурунуз!");
      return;
    }
    const newList = {
      id: Date.now(),
      name: inputValue,
      cards: [],
    };
    dispatch(addList(newList));
    setInputValue("");
    setShowInput(false);
  };

  const toggleMenu = (listId) => {
    setMenuOpen(menuOpen === listId ? null : listId);
  };

  const handleDeleteList = (listId) => {
    dispatch(removeList(listId));
    setMenuOpen(null);
  };

  const handleEditList = (listId, currentName) => {
    setEditingListId(listId);
    setEditValue(currentName);
    setMenuOpen(null);
  };

  const handleSaveEdit = (listId) => {
    if (!editValue.trim()) {
      alert("Введите новое название!");
      return;
    }
    dispatch(updateListName({ listId, newName: editValue }));
    setEditingListId(null);
    setEditValue("");
  };

  const handleEditCard = (listId, cardId, currentName) => {
    setEditingCard({ listId, cardId });
    setEditCardValue(currentName);
  };

  const handleSaveCardEdit = (listId, cardId) => {
    if (!editCardValue.trim()) {
      alert("Введите новое название карточки!");
      return;
    }
    dispatch(updateCardName({ listId, cardId, newName: editCardValue }));
    setEditingCard(null);
    setEditCardValue("");
  };

  const handleCancelCardEdit = () => {
    setEditingCard(null);
    setEditCardValue("");
  };

  return (
    <Wrapper>
      {users.map((list) => (
        <BasketContainer key={list.id}>
          <GlobalMapDivContainer>
            {editingListId === list.id ? (
              <div>
                <InputField
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  placeholder="Введите новое название..."
                />
                <ButtonRow>
                  <AddButton onClick={() => handleSaveEdit(list.id)}>Сохранить</AddButton>
                  <CloseButton onClick={() => setEditingListId(null)}>✕</CloseButton>
                </ButtonRow>
              </div>
            ) : (
              <BasketContainerMapName>
                <h2>{list.name}</h2>
              </BasketContainerMapName>
            )}
            <MuiStyled>
              <MoreHorizIcon style={{ cursor: "pointer" }} onClick={() => toggleMenu(list.id)} />
              {menuOpen === list.id && (
                <Menu>
                  <MenuItem onClick={() => handleEditList(list.id, list.name)}>Изменить</MenuItem>
                  <MenuItem onClick={() => handleDeleteList(list.id)}>Удалить</MenuItem>
                </Menu>
              )}
            </MuiStyled>
          </GlobalMapDivContainer>

          <CardsContainer>
            {list.cards?.map((card) => (
              <InputHandlerClick key={card.id}>
                <GlobalMapDivContainer>
                  {editingCard?.listId === list.id && editingCard?.cardId === card.id ? (
                    <div style={{ width: "100%" }}>
                      <EditInput
                        value={editCardValue}
                        onChange={(e) => setEditCardValue(e.target.value)}
                        placeholder="Введите новое название..."
                      />
                      <ButtonRow>
                        <AddButton onClick={() => handleSaveCardEdit(list.id, card.id)}>
                          Сохранить
                        </AddButton>
                        <CloseButton onClick={handleCancelCardEdit}>✕</CloseButton>
                      </ButtonRow>
                    </div>
                  ) : (
                    <>
                      <h2>{card.name}</h2>
                      <ButtonRow>
                        <EditButton onClick={() => handleEditCard(list.id, card.id, card.name)}>
                          Изменить
                        </EditButton>
                        <DeleteButton
                          onClick={() =>
                            dispatch(
                              removeCardFromList({
                                listId: list.id,
                                cardId: card.id,
                              })
                            )
                          }
                        >
                          Удалить
                        </DeleteButton>
                      </ButtonRow>
                    </>
                  )}
                </GlobalMapDivContainer>
              </InputHandlerClick>
            ))}
          </CardsContainer>

          <AddEsheButton
            aria-label="Добавить карточку"
            onClick={() => openCardInput(list.id)}
          >
            <span>+</span> Добавить карточку
          </AddEsheButton>

          {activeListId === list.id && (
            <ButtonRowTow>
              <InputFieldTwoStyle
                aria-label="Название карточки"
                onChange={handleCardInputChange}
                value={inputDobValue}
                placeholder="Введите название или вставьте ссылку"
              />
              <Buttons>
                <ButtonsButtonBit onClick={() => handleCardAdd(list.id)}>
                  Добавить карточку
                </ButtonsButtonBit>
                <CloseButton onClick={() => setActiveListId(null)}>✕</CloseButton>
              </Buttons>
            </ButtonRowTow>
          )}
        </BasketContainer>
      ))}

      {!showInput && (
        <AddListButton aria-label="Добавить список" onClick={handleAddClick}>
          <span>+</span> Добавить список
        </AddListButton>
      )}

      {showInput && (
        <InputContainer>
          <InputField
            aria-label="Название колонки"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            type="text"
            placeholder="Введите имя колонки..."
          />
          <ButtonRow>
            <AddButton onClick={handleListAdd}>Добавить список</AddButton>
            <CloseButton onClick={handleClose}>✕</CloseButton>
          </ButtonRow>
        </InputContainer>
      )}
    </Wrapper>
  );
};

export default ButtonViaMain;