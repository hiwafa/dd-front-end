import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../api";
var qs = require('qs');

export const fetchChats = createAsyncThunk("chats/fetchChats",
    async (token, thunkAPI) => {
        try {
            const headers = {
                "Authorization": `Bearer ${token}`
            };

            const { data } = await request("chat/", {
                method: "GET", headers
            });

            if (data && Array.isArray(data) && data.length > 0) return data;

            return thunkAPI.rejectWithValue("No Data for chats");
        } catch (err) {

            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const fetchMessages = createAsyncThunk("chats/fetchMessages",
    async ({ token, chatId, only_new, num_recent }, thunkAPI) => {
        try {

            const headers = {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Bearer ${token}`
            };

            const theUrl = num_recent ? `chat/message/${chatId}/?only_new=${only_new}&num_recent=${num_recent}`
                : `chat/message/${chatId}/?only_new=${only_new}`;

            const { data } = await request(theUrl, {
                method: "GET", headers
            });

            if (data && Array.isArray(data)) return {
                id: chatId, msgs: data
            };

            return thunkAPI.rejectWithValue("No Data for messages");

        } catch (err) {

            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

const chatsSlice = createSlice({
    name: "chats",
    initialState: {
        items: [],
        messages: {},
        status: "idle",
        messageStatus: "idle"
    },
    reducers: {
        setMessage: (state, { payload: { chatId, newMessage } }) => {

            if (state.messages[chatId]) {
                state.messages[chatId] = [
                    newMessage,
                    ...state.messages[chatId]
                ];
            } else {
                state.messages[chatId] = [newMessage];
            }


        }
    },
    extraReducers: {

        /* fetching chats */
        [fetchChats.pending]: (state, action) => {
            state.status = "pending";
        },
        [fetchChats.rejected]: (state, action) => {
            state.status = "rejected";
        },
        [fetchChats.fulfilled]: (state, { payload }) => {
            return {
                ...state, items: payload,
                status: "fulfilled"
            };
        },

        /* fetching messages */
        [fetchMessages.pending]: (state, action) => {
            state.messageStatus = "pending";
        },
        [fetchMessages.rejected]: (state, action) => {
            state.messageStatus = "rejected";
        },
        [fetchMessages.fulfilled]: (state, { payload: { id, msgs } }) => {

            if(msgs && msgs.length){
                state.messages = {
                    ...state.messages, [id]: msgs
                };
            }       

            state.messageStatus = "fulfilled";
        },
    }
});


export const { setMessage } = chatsSlice.actions;
export const getChats = (state) => state.chats.items;
export const getMessages = (state) => state.chats.messages;

export default chatsSlice.reducer;