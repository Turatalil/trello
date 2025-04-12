import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [],
    usersMap: []
}

export const buttonViaMainSlice = createSlice({
    name: "button",
    initialState,
    reducers: {
        addSpisok(state, action){
                state.users.push(action.payload)
        },
        addSpisokTwo(state, action){
            state.usersMap.push(action.payload)
        }
    }
})