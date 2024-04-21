import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {tablePropsInterface} from "../../../ui/Table/model/types";
import {User} from "../../../../entities/user";

export type elementInterfaces = tablePropsInterface

const initialState:User= {
    token: '',
    role: 0
}


export const userSlice = createSlice({
    name:"userSlice",
    initialState,
    reducers:{
        setUser:(state, action:PayloadAction<User>) => {
           return state = action.payload
        },
        updateUser:(state, action:PayloadAction<User>) => {
            return state = {...action.payload, ...state}
        },
        deleteUser:(state, action:PayloadAction<User>) => {
            state.token = ''
            state.role = 0
            state.firstname = ''
            state.surname = ''
            state.middlename = ''
            return state;
        },
    }
})

export const {setUser,updateUser, deleteUser} = userSlice.actions
export default userSlice.reducer

