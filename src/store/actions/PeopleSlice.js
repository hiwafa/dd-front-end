import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "./../../api";


export const fetchPeople = createAsyncThunk("people/fetchPeople",
    async (token, thunkAPI) => {
        try {

            console.log("token ", token);

            const headers = {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Bearer ${token}`
            };

            const { data } = await request("chat/", {
                method: "GET", headers
            });

            if(data) return data;

            return thunkAPI.rejectWithValue("No Data for people");

        } catch (err) {

            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

const peopleSlice = createSlice({
    name: "people",
    initialState: {
        status: "idle",
        chats: []
    },
    reducers: {
        setPeople: (state, { payload }) => {

        }
    },
    extraReducers: {
        [fetchPeople.pending]: (state, action) => {
           state.status = "pending";
        },
        [fetchPeople.rejected]: (state, action) => {
            state.status = "rejected";
        },
        [fetchPeople.fulfilled]: (state, {payload}) => {
            return {
                ...state, chats: payload,
                status: "fulfilled"
            };
        },
    }
});


const { setPeople } = peopleSlice.actions;

export default peopleSlice.reducer;