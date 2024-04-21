
import {innerInputTextPropsInterface} from "./types";
import {setProps} from "../../../../lib/store/slices/uiSlice";
import {store} from "../../../../lib/store/store";

export const setInputTextValue = (id:string, value:Record<string, any>) =>{
    let item = store.getState().ui[id] as innerInputTextPropsInterface;
    store.dispatch(setProps({id:item!.id!, key: 'value', value:value[item!.name!]}))
}

