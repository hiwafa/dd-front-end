import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { formRequest, request } from "./../../api";


const fetchPeople = createAsyncThunk("people/fetchPeople",
    async ({token}, thunkAPI) => {
        try {
            
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
            
        },
        [fetchPeople.rejected]: (state, action) => {
            
        },
        [fetchPeople.fulfilled]: (state, {payload}) => {
            console.log("people payload ", payload);
        },
    }
});


const { setPeople } = peopleSlice.actions;

export default peopleSlice.reducer;