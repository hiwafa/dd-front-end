import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request } from "../../api";

export const fetchPeople = createAsyncThunk('people/fetchPeople',
    async (token, thunkAPI )=> {
        try {

            const headers = {
                "Authorization": `Bearer ${token}`
            };

            const { data } = await request("profile/", {
                method: "GET", headers
            });

            if (data && Array.isArray(data) && data.length > 0) return data;

            return thunkAPI.rejectWithValue("No Data for people");

        } catch (err) {

            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

const peopleSlice = createSlice({

    name: "people",

    initialState: {
        people: []
    },

    reducers: {
        setPeople: (state, action)=> {

        },
    },

    extraReducers: {

    }
});

const { setPeople } = peopleSlice.actions;

export default peopleSlice.reducer;