import {className, innerMainProps, mainProps} from "../../../../lib/store/types/props";
import {formItemInterface, innerFormItemInterface} from "../../types";

export interface inputTextPropsInterface extends mainProps, formItemInterface{
    value?: string
    /**  текст-подсказка внутри input*/
    placeholder?: string
    /**  функция по обработке момента изменения значения input, принимает 3 аргумента: текущее значение - value, старое значение -oldValue и name input*/
    onChange?(value:string, oldValue:string, name: string | undefined): void
    /** Функция по обработки момента потери фокуса, принимает 2 аргумента: текущее значение - value и старое значение -oldValue*/
    onExit?(value:string, oldValue:string):void
    /** Функция по обработке нажатия во время focus, принимает 3 аргумента: текущее значение - value, нажатую клавишу key и старое значение oldValue*/
    keyPress?(value:string, oldValue:string, key:string):void
    /** Содержит в себе стили разных состояний элемента*/
    classNames?:{
        /** Определяет стиль обёртки у input*/
        inputWrapper?: className
        /** Определяет стиль текстового поля-описания у input*/
        title?: className
        /** Определяет стиль текстового поля-описания у input во время фокуса*/
        titleActive?: className
        /** Определяет общий стиль input*/
        input?:className
        /** Определяет стиль и вид пустого input*/
        empty?:className
        /**Определяет стиль у обёртки элемента-подсказки*/
        hintWrapper?: className
    }
    /** Определяет type у input, если true, то type будет password, по умолчанию false (type='text')*/
    isPassword?: boolean
}

export interface innerInputTextPropsInterface extends inputTextPropsInterface, innerMainProps, innerFormItemInterface{
    isFocused?: boolean
}
