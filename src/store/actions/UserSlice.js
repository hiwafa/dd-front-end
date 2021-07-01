import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({

    name: "user",
    initialState: {
        firstname: null,
        lastname: null,
        email: null,
        username: null,
        password: null
    },
    reducers: {
        login: (state, {payload}) => {

        },
        signup: (state, {payload}) => {

        }
    },
    extraReducers: {

    }
});

export const {} = userSlice.actions;

export default userSlice.reducer;