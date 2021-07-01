import { combineReducers, configureStore } from "@reduxjs/toolkit";


import userReducer from "./actions/UserSlice";

const allReducers = combineReducers({
    user: userReducer
});

export default configureStore({
    reducer: allReducers
});