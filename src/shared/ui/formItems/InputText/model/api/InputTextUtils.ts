import {store} from "../../../../../lib/store/store";
import {innerInputTextPropsInterface, inputTextPropsInterface} from "../types";
import {validateInputText} from "../validate";
import {setProperties, setProps} from "../../../../../lib/store/slices/uiSlice";

export const getValue = (id:string) => {
    const input = store.getState().ui[id] as innerInputTextPropsInterface
    return input.value
}

export const setInputTextProps = (id:string, key: keyof inputTextPropsInterface, value: any) => {
    store.dispatch(setProps({id, key,value}))
}

export const setPropsArr = (id:string, propsArray: Array<{key: keyof inputTextPropsInterface, value: any}>) => {
    store.dispatch(setProperties({id,propsArray}))
}

export const validate = (id: string) => {
    const indexes = validateInputText(id);
    store.dispatch(setProps({id, key: "invalidValidatorsIndexes", value: []}))
    if(indexes.length > 0) {
        store.dispatch(setProps({id, key: 'invalidValidatorsIndexes', value: indexes}));
        return false;
    } else {
        return true;
    }
}