import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/index'
// store. Смотрите в документации react-redux а потом redux-toolkit
export default configureStore({
    reducer: {
        users: userReducer,
    },
})