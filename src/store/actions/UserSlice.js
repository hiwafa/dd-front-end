import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


import request from "./../../api";
import { DD_OAUTH_CLIENT_ID, DD_OAUTH_CLIENT_SECRET } from "@env";

export const signup = createAsyncThunk("user/signup",
    async (params, metaData) => {
        try {
            
            const { data } = await request('auth/register/', {
                method: "POST", data: params
            });

            return data;

        } catch (err) {
            console.log("Error: ", err);
            return metaData.rejectWithValue(err);
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

export default userSlice.reducer;