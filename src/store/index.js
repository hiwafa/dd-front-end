import { combineReducers, configureStore } from "@reduxjs/toolkit";


import userReducer from "./actions/UserSlice";
import peopleReducer from "./actions/PeopleSlice";

const allReducers = combineReducers({
    user: userReducer,
    people: peopleReducer
});

export default configureStore({
    reducer: allReducers
});