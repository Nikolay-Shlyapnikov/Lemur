import {className, innerMainProps, mainProps} from "../../../lib/store/types/props";
import {ReactNode} from "react";

export interface hintInterface extends mainProps{
    className?:{
        hintWrapper?:className
        hintIcon?: className
        hintInner?: className
        warningIcon?: className
        infoIcon?: className
        errorIcon?: className
        okIcon?: className
    },
    hintIcon?:ReactNode | ReactNode[]
    hintInner?: ReactNode | ReactNode[]
    status?: 'warning' | 'error' | 'ok' | 'info'
}

export interface innerHintInterface extends hintInterface, innerMainProps {

}