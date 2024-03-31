import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {setPropsByKey, setPropsByKeys} from "./utils/setProps";
import {tablePropsInterface} from "../../ui/Table/model/types";

export type elementInterfaces = tablePropsInterface

const initialState:Record<string, elementInterfaces> = {}
export const uiSlice = createSlice({
    name:"uiSlice",
    initialState,
    reducers:{
        createElem:(state, action:PayloadAction<elementInterfaces>) => {
                state[action.payload.id!] = action.payload
        },
        setProps:(state, action:PayloadAction<{id: string, key: string, value: any}>)=>{
            setPropsByKey(state, action)
        },
        setProperties:(state, action: PayloadAction<{id:string, propsArray: Array<{key: string, value: any}>}>) => {
            return setPropsByKeys(state, action);
        }
    }
})

export const {createElem,setProps, setProperties} = uiSlice.actions
export default uiSlice.reducer

