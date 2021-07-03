import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


import request from "./../../api";

export const signup = createAsyncThunk("user/signup",
    async (params, thunkAPI) => {
        try {

            const { data } = await request('auth/register/', {
                method: "POST", data: params
            });

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
export const getUser = (state)=> state.user;

export default userSlice.reducer;