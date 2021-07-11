import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../api";


export const fetchChats = createAsyncThunk("chats/fetchChats",
    async (token, thunkAPI) => {
        try {

            const headers = {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Bearer ${token}`
            };

            const { data } = await request("chat/", {
                method: "GET", headers
            });

            if(data && Array.isArray(data) && data.length > 0) return data;

            return thunkAPI.rejectWithValue("No Data for chats");

        } catch (err) {

            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

const chatsSlice = createSlice({
    name: "chats",
    initialState: {
        status: "idle",
        items: []
    },
    reducers: {
        setChats: (state, { payload }) => {

        }
    },
    extraReducers: {
        [fetchChats.pending]: (state, action) => {
           state.status = "pending";
        },
        [fetchChats.rejected]: (state, action) => {
            state.status = "rejected";
        },
        [fetchChats.fulfilled]: (state, {payload}) => {
            return {
                ...state, items: payload,
                status: "fulfilled"
            };
        },
    }
});


export const { setChats } = chatsSlice.actions;
export const getChats = (state ) => state.chats.items;

export default chatsSlice.reducer;