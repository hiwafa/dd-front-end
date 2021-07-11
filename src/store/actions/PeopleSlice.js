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

    },
    reducers: {
        setPeople: (state, { payload }) => {

        }
    },
    extraReducers: {
        [fetchPeople.pending]: (state, action) => {
            console.log("people pending ", action.payload);
        },
        [fetchPeople.rejected]: (state, action) => {
            console.log("people rejected ", action.payload);
        },
        [fetchPeople.fulfilled]: (state, {payload}) => {
            console.log("people fulfilled ", payload);
        },
    }
});


const { setPeople } = peopleSlice.actions;

export default peopleSlice.reducer;