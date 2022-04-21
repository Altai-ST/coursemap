import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { saveCourse, saveUser } from "../../store/reducers";


// Асинхронные функции для запросов на сервер. Смотрите как использовать эту фукнцию в документации redux-toolkit

// Запрос для регистрации
export const fetchUser = createAsyncThunk(
    'userSlice/fetchUser',
    async function(formData, {rejectWithValue, dispatch}){
        try{
            const response = await fetch('https://courses-map.herokuapp.com/api/v1/auth/register/', {
                method: 'POST',
                body: JSON.stringify(formData),
                mode: 'cors',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            if(!response.ok){
                throw new Error('Server Error!')
            }
            const data = await response.json();
            console.log(data)

            //сохранение данные с сервера в store

            // localStorage.setItem("userData", JSON.stringify(data))
            dispatch(saveUser(data))
            return data
        }catch(error){
            return rejectWithValue(error.message)
        }
        
    }
)

// Запрос для получения данных о курсе
export const fetchGet = createAsyncThunk(
    'userSlice/fetchGet',
    async function({dispatch}){
        try{
            const response = await fetch('https://courses-map.herokuapp.com/api/v1/courses_and_internship/courses/',{
                method: 'GET',
            })
            if(!response.ok){
                throw new Error('Server Error!')
            }
            const data = await response.json();
            //сохранение данные с сервера в store
            console.log(data)
            dispatch(saveCourse(data))
            return data
        }catch(error){
            return isRejectedWithValue(error.message)
        }
        
    }
)





