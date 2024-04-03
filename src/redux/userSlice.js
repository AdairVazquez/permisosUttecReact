import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    username : "",
    email: "",
};

export const userSlice = createSlice ({
    name: "user",
    initialState,
    reducers: {
        addUser : (state, action) => {
            const {name, username, email} = action.payload;
        }
    }
})