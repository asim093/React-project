import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user-slice.jsx";
const rootreducer = combineReducers({
    user: userReducer
})

export default rootreducer;