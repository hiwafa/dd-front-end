import { combineReducers, configureStore } from "@reduxjs/toolkit";


import userReducer from "./actions/UserSlice";
import chatsReducer from "./actions/ChatsSlice";

const allReducers = combineReducers({
    user: userReducer,
    chats: chatsReducer
});

export default configureStore({
    reducer: allReducers
});