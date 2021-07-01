import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const signup = createAsyncThunk("user/signup",
    async (params, metaData) => {
        
    }
);

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
    },
    extraReducers: {

    }
});

export const { } = userSlice.actions;

export default userSlice.reducer;