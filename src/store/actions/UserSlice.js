import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const qs = require('qs');

import { saveSecure, getValueFor } from "../secure";

import { formRequest } from "./../../api";

export const signup = createAsyncThunk("user/signup",
    async (params, thunkAPI) => {
        try {

            const response = await formRequest('auth/register/', {
                method: "POST", data: qs.stringify(params)
            });
            
            const data = response.data;

            if(data && data.access_token && data.expires_in){

                // thunkAPI.dispatch(setUser(params));

                saveSecure("credential", {
                    ...data, ...params
                });

                return { ...data, ...params };
            }

            console.log("response", response);
            return thunkAPI.rejectWithValue(qs.stringify(data));

        } catch (err) {

            console.log("response err", JSON.stringify(err));
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
        setUser: (state, {payload})=> {
            return {
                ...state,
                ...payload
            }
        }
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
            console.log("payload::: ", {
                ...state, ...payload,
                status: "fulfilled"
            });

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

export const { setUser } = userSlice.actions;
export const getUser = (state) => state.user;

export default userSlice.reducer;