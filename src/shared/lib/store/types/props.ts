import {store} from "../store";
import {CSSProperties} from "react";

export interface mainProps {
    id?: string
    visible?: boolean
    styles?: CSSProperties
}

export interface innerMainProps{
    sliceName:string
}

export interface className {
    name?: string
    useDefault?: boolean
    style?: CSSProperties
}
export type RootState = ReturnType<typeof store.getState>;