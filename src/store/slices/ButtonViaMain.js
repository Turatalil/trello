
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   users: [],
//   search: ""
// };

// export const basketSlice = createSlice({
//   name: "basket",
//   initialState,
//   reducers: {
//     addList: (state, action) => {
//       state.users.push(action.payload);
//     },
//     addCardToList: (state, action) => {
//       const { listId, newCard } = action.payload;
//       const list = state.users.find((list) => list.id === listId);
//       if (list) {
//         list.cards.push(newCard);
//       }
//     },
//     removeCardFromList: (state, action) => {
//       const { listId, cardId } = action.payload;
//       const list = state.users.find((list) => list.id === listId);
//       if (list) {
//         list.cards = list.cards.filter((card) => card.id !== cardId);
//       }
//     },
//     removeList: (state, action) => {
//       state.users = state.users.filter((list) => list.id !== action.payload);
//     },
//     updateListName: (state, action) => {
//       const { listId, newName } = action.payload;
//       const list = state.users.find((list) => list.id === listId);
//       if (list) {
//         list.name = newName;
//       }
//     },
//     updateCardName: (state, action) => {
//       const { listId, cardId, newName } = action.payload;
//       const list = state.users.find((list) => list.id === listId);
//       if (list) {
//         const card = list.cards.find((card) => card.id === cardId);
//         if (card) {
//           card.name = newName;
//         }
//       }
//     },
//     searchFromName(state, action) {
//       state.search = action.payload;
//       state.users = state.users.filter((user) =>
//         user.name.toLowerCase().startsWith(action.payload.toLowerCase())
//       );
//     },
//   },
// });

// export const { addList, addCardToList, removeCardFromList, removeList, updateListName, updateCardName } = basketSlice.actions;

// export default basketSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allUsers: [], 
  users: [],
  search: ""
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addList: (state, action) => {
      state.allUsers.push(action.payload);
      state.users.push(action.payload);
    },
    addCardToList: (state, action) => {
      const { listId, newCard } = action.payload;
      const list = state.allUsers.find((list) => list.id === listId);
      if (list) {
        list.cards.push(newCard);
      }
      const filteredList = state.users.find((list) => list.id === listId);
      if (filteredList) {
        filteredList.cards.push(newCard);
      }
    },
    removeCardFromList: (state, action) => {
      const { listId, cardId } = action.payload;
      state.allUsers = state.allUsers.map(list =>
        list.id === listId ? {
          ...list,
          cards: list.cards.filter(card => card.id !== cardId)
        } : list
      );
      state.users = state.users.map(list =>
        list.id === listId ? {
          ...list,
          cards: list.cards.filter(card => card.id !== cardId)
        } : list
      );
    },
    removeList: (state, action) => {
      state.allUsers = state.allUsers.filter((list) => list.id !== action.payload);
      state.users = state.users.filter((list) => list.id !== action.payload);
    },
    updateListName: (state, action) => {
      const { listId, newName } = action.payload;
      const updateName = (list) => {
        if (list.id === listId) {
          list.name = newName;
        }
        return list;
      };
      state.allUsers = state.allUsers.map(updateName);
      state.users = state.users.map(updateName);
    },
    updateCardName: (state, action) => {
      const { listId, cardId, newName } = action.payload;
      const updateCard = (list) => {
        if (list.id === listId) {
          list.cards = list.cards.map(card =>
            card.id === cardId ? { ...card, name: newName } : card
          );
        }
        return list;
      };
      state.allUsers = state.allUsers.map(updateCard);
      state.users = state.users.map(updateCard);
    },
    searchFromName(state, action) {
      state.search = action.payload;
      if (action.payload.trim() === "") {
        state.users = [...state.allUsers];
      } else {
        state.users = state.allUsers.filter((user) =>
          user.name.toLowerCase().startsWith(action.payload.toLowerCase())
        );
      }
    },
  },
});
export const {
  addList,
  addCardToList,
  removeCardFromList,
  removeList,
  updateListName,
  updateCardName,
  searchFromName
} = basketSlice.actions;

export default basketSlice.reducer;
