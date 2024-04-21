import {hintInterface} from "../types";
import {store} from "../../../../lib/store/store";
import {setProperties, setProps} from "../../../../lib/store/slices/uiSlice";


export const setHintProps = (id: string, key: keyof hintInterface, value: any) => {
    store.dispatch(setProps({id,key,value}))
}

export const setPropsArr = (id: string, propsArray: {key: keyof hintInterface, value: any}[]) => {
    store.dispatch(setProperties({id,propsArray}))
}