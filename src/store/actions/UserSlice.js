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
                saveSecure("credential", data);
                return data;
            }

            return thunkAPI.rejectWithValue("you are not authenticated");

        } catch (err) {

            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const loadCredential = createAsyncThunk("user/loadCredential",
    async (params, thunkAPI) => {
        try {

            const data = await getValueFor("credential");

            if(data && data.access_token && data.expires_in) {
                return data;
            }

            return thunkAPI.rejectWithValue("you are not authenticated");

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
        username: null,
        password: null,
        status: "idle",
        email: null,
        expiresIn: 0,
        accessToken: null,
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
            state = {
                ...state, ...payload,
                status: "fulfilled"
            }
        },

        [loadCredential.pending]: (state, action) => {
            state.status = "pending"
        },
        [loadCredential.rejected]: (state, action) => {
            state.status = "rejected"
        },
        [loadCredential.fulfilled]: (state, { payload }) => {
            state = {
                ...state, ...payload,
                status: "fulfilled"
            }
        },
    }
});

export const { } = userSlice.actions;
export const getUser = (state) => state.user;

export default userSlice.reducer;