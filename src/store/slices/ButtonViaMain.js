
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addList: (state, action) => {
      state.users.push(action.payload);
    },
    addCardToList: (state, action) => {
      const { listId, newCard } = action.payload;
      const list = state.users.find((list) => list.id === listId);
      if (list) {
        list.cards.push(newCard);
      }
    },
    removeCardFromList: (state, action) => {
      const { listId, cardId } = action.payload;
      const list = state.users.find((list) => list.id === listId);
      if (list) {
        list.cards = list.cards.filter((card) => card.id !== cardId);
      }
    },
    removeList: (state, action) => {
      state.users = state.users.filter((list) => list.id !== action.payload);
    },
    updateListName: (state, action) => {
      const { listId, newName } = action.payload;
      const list = state.users.find((list) => list.id === listId);
      if (list) {
        list.name = newName;
      }
    },
    updateCardName: (state, action) => {
      const { listId, cardId, newName } = action.payload;
      const list = state.users.find((list) => list.id === listId);
      if (list) {
        const card = list.cards.find((card) => card.id === cardId);
        if (card) {
          card.name = newName;
        }
      }
    },
  },
});

export const { addList, addCardToList, removeCardFromList, removeList, updateListName, updateCardName } = basketSlice.actions;

export default basketSlice.reducer;