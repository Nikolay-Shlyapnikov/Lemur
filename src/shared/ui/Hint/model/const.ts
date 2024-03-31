import {innerHintInterface} from "./types";
import styles from '../ui/hint.scss'
export const defaultHint: innerHintInterface = {
    id: "hint",
    sliceName:"hintSlice",
    className:{
        hintWrapper:{name: styles.hint__wrapper, useDefault:true},
        hintIcon: {name: styles['hint__icon'], useDefault:true},
        hintInner: {name: styles['hint__inner'], useDefault:true},
        warningIcon: {name: styles['hint__icon--warning'], useDefault:true},
        infoIcon: {name: styles['hint__icon--info'], useDefault:true},
        errorIcon: {name: styles['hint__icon--error'], useDefault:true},
        okIcon: {name: styles['hint__icon--ok'], useDefault:true},
    },
    status: 'info',
    hintInner: 'Подсказка'
}