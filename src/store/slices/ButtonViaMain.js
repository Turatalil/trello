import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [],
    usersMap: [],
    addHandler: false,
}

export const buttonViaMainSlice = createSlice({
    name: "button",
    initialState,
    reducers: {
        addList: (state, action) => {
            state.users.push(action.payload);
          },
          
          addCardToList: (state, action) => {
            const { listId, newCard } = action.payload;
            const list = state.users.find((l) => l.id === listId);
            if (list) {
              list.cards.push(newCard);
            }
          },
          
    }
})

  
