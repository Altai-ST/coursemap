import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const userData ={
    userList:[]
}


export const fetchUser = createAsyncThunk(
    'userSlice/fetchUser',
    async function(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        return data
    }
)

const userSlice = createSlice({
    name:'userSlice',
    initialState: userData,
    reducers:{
        saveUser(state, action){
            state.userList.push(action.payload)
        }
    },
    extraReducers:{
        [fetchUser.pending]: (state, action)=>{},
        [fetchUser.fulfilled]: (state, action)=>{
            state.userList = action.payload;
        },
        [fetchUser.rejected]: (state, action)=>{},
    }
})

export const {saveUser} = userSlice.actions;
export default userSlice.reducer