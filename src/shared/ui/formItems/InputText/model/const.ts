
import {innerInputTextPropsInterface} from './types'
import styles from '../ui/InputTextStyle.scss'
import {idGeneration} from "../../../../lib/store/utils/idGeneration";
export const defaultInputText:innerInputTextPropsInterface = {
    classNames:{
        inputWrapper:{name:styles['input-text__wrapper'], useDefault:true},
        title:{name:styles['input-text__title'], useDefault:true},
        titleActive:{name:styles['input-text__title-active'], useDefault:true},
        input:{name:styles['input-text'], useDefault:true},
        empty:{name:styles['empty'], useDefault:true},
        hintWrapper:{name:styles['input-text__hint-wrapper'], useDefault:true},
    },
    id: idGeneration('inputText'),
    value: '',
    sliceName:"inputTextSlice",
    styles: {},
    isPassword: false,
    canEdit: true,
    isFocused: false
}


