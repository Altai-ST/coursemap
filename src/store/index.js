import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/index'
export default configureStore({
    reducer: {
        users: userReducer,
    },
})