import { combineReducers, configureStore } from "@reduxjs/toolkit";


import userReducer from "./actions/userSlice";

const allReducers = combineReducers({
    user: userReducer
});

export default configureStore({
    reducer: allReducers
});