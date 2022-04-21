import {createSlice} from "@reduxjs/toolkit"
import { fetchUser } from "../../containers/httpRequest";


const userData ={
    userData:[],
    course:[],
    categoryCourse:[[],[],[]],
    tutor:[],
    status:'',
    currentCourse:'',
}
// createSlice смотрите в документации redux-toolkit. Оно отвечает для хранения данных в фронте
const userSlice = createSlice({
    name:'userSlice',
    initialState: userData,
    reducers:{
        saveUser(state, action){
            state.userData.push(action.payload)
        },
        saveCourse(state, action){
            state.course = action.payload
        },
        saveCategory(state, action){
            state.categoryCourse.push(action.payload)
        },
        saveTutor(state, action){
            state.tutor = action.payload
        },
        setCurrentCourse(state, action){
            state.currentCourse = action.payload
        }
    },
    extraReducers:{
        // [fetchUser.pending]: (state, action)=>{
        //     state.status = "Loading"
        // },
        // [fetchUser.fulfilled]: (state, action)=>{
        //     state.status = "Ok"
        // },
        // [fetchUser.rejected]: (state, action)=>{
        //     state.status = "Error"
        // },
    }
})

export const {saveUser, saveCourse, saveCategory, saveTutor} = userSlice.actions;
export default userSlice.reducer