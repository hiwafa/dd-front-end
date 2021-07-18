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

            if (data && Array.isArray(data) && data.length > 0) return data;

            return thunkAPI.rejectWithValue("No Data for chats");

        } catch (err) {

            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const fetchMessages = createAsyncThunk("chats/fetchMessages",
    async ({ token, chatId, filters }, thunkAPI) => {
        try {

            const headers = {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Bearer ${token}`
            };

            const { data } = await request(`chat/message/${chatId}/`, {
                method: "GET", headers, data: filters
            });

            console.log("DATA:   ", data);

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

            console.log("state.messages: ", JSON.stringify(state.messages));

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

            console.log("messages 111: ", msgs);

            state.messages = {
                ...state.messages, [id]: msgs
            };

            // if (state.messages[id] === undefined) {
            //     state.messages = {
            //         ...state.messages, [id]: msgs
            //     };
            // } else {
            //     state.messages = {
            //         ...state.messages, [id]: [
            //             ...(state.messages[id]),
            //             ...msgs
            //         ]
            //     };
            // }

            // state.messageStatus = "fulfilled";
        },
    }
});


export const { setMessage } = chatsSlice.actions;
export const getChats = (state) => state.chats.items;
export const getMessages = (state) => state.chats.messages;

export default chatsSlice.reducer;