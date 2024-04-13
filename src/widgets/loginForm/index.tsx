import React from 'react';
import {Button} from "@mui/material";
import {InputText, inputTextModel} from "../../shared/ui/formItems/InputText";
import {address} from "../../app/config";
import {store} from "../../shared/lib/store/store";
import {updateProps} from "../../shared/lib/store/uiSlice";
import {fetch} from "../../shared/lib/request/API";
import {inputValueType, validator} from "../../shared/ui/formItems/types";
export const LoginForm = () => {
    return (
        <form
            style={{
                width: 600,
                margin: '50px auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <InputText
                name={'email'}
                id={"email"}
                title={'email'}
                autoValidate={true}
                validators={
                    [
                        {type: 'required', errorMessage: 'Поле "email" обяазтельно для заполнения'},
                        {type: 'contain', containValue: '@', errorMessage: 'Поле "email" должно содержать @'},
                        {type: 'lengthRange', minLength: 5, errorMessage: 'Поле "email" должно состять минимум из 6 символов'},

                    ]
                }
            />

            <Button onClick={() => {
               if (inputTextModel.validate('email')) {
                    fetch(`post`, `${address}/registration`,{
                            params: {
                                email: inputTextModel.getValue('email')
                            }
                        },
                        (response) => {
                            console.log(response);
                        },
                        (error) => {
                            if (error.errorList) {
                                const errors = error.errorList as Record<string, any>[]
                                errors.forEach(error => {
                                    store.dispatch(updateProps({id: error.fieldName, key: 'validators', value:
                                    [
                                        {type: 'custom', errorMessage: 'Пользователь с таким email уже зарегистрирован',
                                            customValidation: (value: inputValueType, validator: validator) => {
                                                return false;
                                            }
                                        }
                                    ]}))

                                });
                            }
                        }
                    )
               }
            }}>Войти</Button>

        </form>
    );
};

