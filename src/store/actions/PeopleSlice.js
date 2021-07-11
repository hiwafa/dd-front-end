import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const peopleSlice = createSlice({
    name: "people",
    initialState: {

    },
    reducers: {
        setPeople: (state, { payload }) => {

        }
    },
    extraReducers: {

    }
});


const { setPeople } = peopleSlice.actions;

export default peopleSlice.reducer;