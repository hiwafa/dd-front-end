import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchPeople = createAsyncThunk("people/fetchPeople",
    async (params, thunkAPI) => {
        try {
            
        } catch (err) {
            
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

    }
});


const { setPeople } = peopleSlice.actions;

export default peopleSlice.reducer;