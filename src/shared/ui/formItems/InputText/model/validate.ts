import {showError} from "../../../../lib/helpers/errorHandler";
import {store} from "../../../../lib/store/store";
import {innerInputTextPropsInterface} from "./types";


export const validateInputText = (id: string): Array<number> => {
    const props = store.getState().ui[id]! as innerInputTextPropsInterface;
    const result: Array<number> = [];
    const value = props.value as string;
    if (props.validators) {
        const valueArr = Array.from(value);
        props.validators.forEach((validator, index) => {
            switch (validator.type) {
                case "regexp":
                    if (validator.regexp) {
                        if (!validator.regexp.test(value))
                            result.push(index);
                    }
                    else
                        showError('Не указан regexp для валидатора regexp элемента formItem с id '+ id);
                    break;
                case "lengthRange":
                    if (validator.maxLength && validator.minLength) {
                        if(valueArr.length > validator.maxLength || valueArr.length < validator.minLength) {
                            result.push(index);
                        }
                    } else if (validator.maxLength) {
                        if(valueArr.length > validator.maxLength)
                            result.push(index);
                    } else if (validator.minLength) {
                        if(valueArr.length < validator.minLength)
                            result.push(index);
                    }
                    else
                        showError('Не указан maxLength или minLength для валидатора lengthRange элемента formItem с id '+ id);
                    break;
                case "required":
                    if (value == undefined || value == "" || valueArr.length == 0)
                            result.push(index);
                    break;
                case "contain":
                    if (validator.containValue) {
                        if (!value.includes(String(validator.containValue)))
                            result.push(index);
                    }
                    else
                        showError('Не указан containValue для валидатора contain элемента formItem с id '+ id);
                    break;
                case "notContain":
                    if (validator.containValue) {
                        if (value.includes(String(validator.containValue)))
                            result.push(index);
                    }
                    else
                        showError('Не указан containValue для валидатора notContain элемента formItem с id '+ id);
                    break;
                case "equals":
                    if (validator.equalValue) {
                        if (validator.equalValue == value)
                            result.push(index);
                    }
                    else
                        showError('Не указан equalValue для валидатора equals элемента formItem с id '+ id);
                    break;
                case "notEquals":
                    if (validator.equalValue) {
                        if (validator.equalValue != value)
                            result.push(index);
                    }
                    else
                        showError('Не указан equalValue для валидатора notEquals элемента formItem с id '+ id);
                    break;
                case "custom":
                    if (validator.customValidation) {
                        if(!validator.customValidation(value)) {
                            result.push(index)
                        }
                    } else {
                        showError('Не указан customValidation для валидатора custom элемента formItem с id '+ id);
                    }
                    break;
            }
        })
    }
    return result;
}