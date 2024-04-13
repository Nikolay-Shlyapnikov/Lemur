
export const messageTextürder: string = "Выберите нужный пункт меню";
export const optsorder = {
    reply_markup:
        JSON.stringify({
            inline_keyboard: [
                [{ text: "Сменить пароль", callback_data: 'change_password', }],
                        [{ text: "Изменить параметры заказа", callback_data: 'change_order' }],
                        [{ text: "ПАМАГИТЕ", callback_data: 'SOS'}],
                        [{ text: 'Выйти с админ панели', callback_data: 'exit_admin', }],
                        [{ text: "Текущий курс: + curs, callback_data: change_curs" }],
                        [{ text: "Bot created by @Vovuslexx", callback_data: 'author', }]
                ]
    })
};




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


