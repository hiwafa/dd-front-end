import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const queryString = require('query-string');

import { saveSecure, getValueFor } from "../secure";

import { formRequest } from "./../../api";

export const signup = createAsyncThunk("user/signup",
    async (params, thunkAPI) => {
        try {

            const { data } = await formRequest('auth/register/', {
                method: "POST", data: queryString.stringify(params)
            });

            if(data && data.access_token && data.expires_in){
                saveSecure(data);
            }

            return data;

        } catch (err) {

            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

const userSlice = createSlice({

    name: "user",
    initialState: {
        firstname: null,
        lastname: null,
        email: null,
        username: null,
        password: null,
        status: "idle"
    },
    reducers: {
    },
    extraReducers: {
        [signup.pending]: (state, action) => {
            state.status = "pending"
        },
        [signup.rejected]: (state, action) => {
            state.status = "rejected"
        },
        [signup.fulfilled]: (state, { payload }) => {
            state.status = "fulfilled"
        }
    }
});

export const { } = userSlice.actions;
export const getUser = (state) => state.user;

export default userSlice.reducer;