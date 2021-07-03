import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const qs = require('qs');

import { saveSecure, getValueFor } from "../secure";

import { formRequest } from "./../../api";

export const signup = createAsyncThunk("user/signup",
    async (params, thunkAPI) => {
        try {

            const { data } = await formRequest('auth/register/', {
                method: "POST", data: qs.stringify(params)
            });

            if(data && data.access_token && data.expires_in){
                saveSecure("credential", {
                    ...data, ...params
                });
                return data;
            }

            return thunkAPI.rejectWithValue(qs.stringify(data));

        } catch (err) {

            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const loadCredential = createAsyncThunk("user/loadCredential",
    async (params, thunkAPI) => {
        try {

            return (await getValueFor("credential"));

        } catch (err) {

            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

const userSlice = createSlice({

    name: "user",
    initialState: {
        email: null,
        expires_in: 0,
        username: null,
        password: null,
        status: "idle",
        access_token: null,
        reasonForRejection: null
    },
    reducers: {
    },
    extraReducers: {
        [signup.pending]: (state, action) => {
            state.status = "pending"
        },
        [signup.rejected]: (state, action) => {
            state.status = "rejected";
            state.reasonForRejection = qs.parse(action.payload);
        },
        [signup.fulfilled]: (state, { payload }) => {
            console.log("payload: ", payload)
            return {
                ...state, ...payload,
                status: "fulfilled"
            };
        },

        [loadCredential.pending]: (state, action) => {
            state.status = "pending"
        },
        [loadCredential.rejected]: (state, action) => {
            state.status = "rejected";
            state.reasonForRejection = action.payload;
        },
        [loadCredential.fulfilled]: (state, { payload }) => {
            return {
                ...state, ...payload,
                status: "fulfilled"
            }
        },
    }
});

export const { } = userSlice.actions;
export const getUser = (state) => state.user;

export default userSlice.reducer;