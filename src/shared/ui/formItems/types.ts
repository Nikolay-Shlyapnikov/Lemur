import {ReactNode} from "react";
import {hintInterface} from "../Hint/model/types";
import {innerInputTextPropsInterface} from "./InputText/model/types";

export type inputValueType = string | number | Date | Record<string, any> | undefined | boolean

export type formItemsInterfaces = innerInputTextPropsInterface;

export interface validator extends Record<string, any>{
    /**Тип валидатора, обязательный для заполнения, для некоторых типов нужны дополнительные параметры
     *
     * regexp - валидация по регулярному выражению, требует регулярное выражение regexp
     *
     * required - обязательно для заполнения, то есть value не может принимать значения undefined, null, ""
     *
     * equals/notEquals сравнение value input с equalValue, требует equalValue
     *
     * contain/notContain проверка на содержание/не содержания в value input containValue, требует containValue
     *
     * lengthRange - проверка input value на длину символов в нём, требует minLength и/или maxLength
     *
     * custom - кастомный валидатор, требует функцию customValidation, которая принимает как аргумент input value и должна вернуть boolean
     *
     * limit - проверка input value на максимальное\минимальное значение, требует minValue и/или maxValue
     * */
    type: 'regexp' | 'required' | 'equals' | "notEquals" | "lengthRange" | 'contain' | 'notContain' | "custom" | "limit"
    /**Функция кастомного валидатора, должна возвращать индекс валидатора в случае провала проверки или undefined*/
    customValidation?(value: inputValueType, validator: validator): boolean
    /**  Значение, на содержание\не содержания которого будет проверяться formItem*/
    containValue?: inputValueType
    /**  Значение, на равенство\неравенство которого будет проверяться formItem*/
    equalValue?: inputValueType
    /** Минимальное количество символов, введённых в formItem */
    minLength?: number
    /** Максимальное количество символов, введённых в formItem*/
    maxLength?: number
    /** Регулярное выражение, в которое необходимо для валидатора с типом regexp */
    regexp?: RegExp
    /** Ошибка, которая будет отображаться при валидации*/
    errorMessage?: ReactNode | ReactNode[]
    /** Минимальное значение для formItem*/
    minValue?: inputValueType
    /** Максимальное значение для formItem*/
    maxValue?: inputValueType
}

export interface formItemInterface {
    value?: inputValueType
    /**  Имя item, используется для связки item с элементом form*/
    name?: string
    /** Определяет, текстовое описание item, по умолчанию "" */
    title?: ReactNode | ReactNode[]
    /** Определяет, расположение текстового описания item, по умолчанию "top", то есть над item*/
    titleAlign?: 'top' | 'left' | 'bottom' | 'right'
    /** Определяет массив объектов validator, применяемых при проверках item*/
    validators?:validator[]
    /** Определяет, можно ли вносить изменение в value item, по умолчанию true */
    canEdit?: boolean
    /**Определяет, нужно ли при вводе данных в formItem автоматически проводить валидацию с указанными validators*/
    autoValidate?: boolean
    /**Определяет пропсы у элемента-подсказки*/
    hintProps?: hintInterface
}

export interface innerFormItemInterface {
    invalidValidatorsIndexes?: Array<number>
}