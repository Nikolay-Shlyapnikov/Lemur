import React from 'react';
import {Button} from "@mui/material";
import {InputText, inputTextModel} from "../../shared/ui/formItems/InputText";
import {address} from "../../app/config";
import {store} from "../../shared/lib/store/store";
import {updateProps} from "../../shared/lib/store/slices/uiSlice";
import {fetch} from "../../shared/lib/request/API";
import {inputValueType, validator} from "../../shared/ui/formItems/types";
import {setUser, updateUser} from "../../shared/lib/store/slices/userSlice";
import {User} from "../../entities/user";
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
                        {type: 'lengthRange', minLength: 5, errorMessage: 'Поле "email" должно состоять минимум из 6 символов'},

                    ]
                }
            />
            <InputText
                name={'password'}
                id={"password"}
                title={'Пароль'}
                autoValidate={true}
                isPassword={true}
                validators={
                    [
                        {type: 'required', errorMessage: 'Поле "password" обяазтельно для заполнения'},
                        {type: 'lengthRange', minLength: 5, errorMessage: 'Поле "password" должно состоять минимум из 6 символов'},

                    ]
                }
                onChange={()=> {
                    inputTextModel.validate("passwordRepeat")
                }}
            />
            <InputText
                name={'passwordRepeat'}
                id={"passwordRepeat"}
                title={'Потворите пароль'}
                autoValidate={true}
                isPassword={true}
                validators={
                    [
                        {type: 'required', errorMessage: 'Поле "Потворите пароль" обяазтельно для заполнения'},
                        {type: 'lengthRange', minLength: 5, errorMessage: 'Поле "Потворите пароль" должно состоять минимум из 6 символов'},
                        {type: 'custom', errorMessage: 'Поля "Пароль" и "Пвторите пароль" должны совпадать',
                            customValidation(value: inputValueType, validator: validator): boolean {
                                return inputTextModel.getValue('password') == value;
                            }
                        }
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
                            store.dispatch(setUser(response as User));
                        },
                        (error) => {
                            if (error && error.errorList) {
                                const errors = error.errorList as Record<string, any>[];
                                errors.forEach(error => {
                                    store.dispatch(updateProps({id: error.fieldName, key: 'validators', value:
                                    [
                                        {type: 'custom', errorMessage: 'Пользователь с таким email уже зарегистрирован',
                                            customValidation: (value: inputValueType, validator: validator) => {
                                                return false;
                                            }
                                        }
                                    ]}));
                                    inputTextModel.validate('email');
                                });
                            }
                        }
                    )
               }
            }}>Войти</Button>

        </form>
    );
};

