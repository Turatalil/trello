import { createSlice } from "@reduxjs/toolkit"
import { act } from "react"

const initialState = {
    users: []
}

export const buttonViaMainSlice = createSlice({
    name: "button",
    initialState,
    reducers: {
        addSpisok(state, action){
                state.users.push(action.payload)
        }
    }
})