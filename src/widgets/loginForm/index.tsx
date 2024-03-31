import React from 'react';
import {Button} from "@mui/material";
import {InputText} from "../../shared/ui/formItems/InputText";

export const LoginForm = () => {
    return (
        <form
            style={{width: 600, margin: '50px auto'}}
        >
            <InputText
                isPassword={true}
                name={'password'}
                id={"password"}
                title={'Пароль'}
                autoValidate={true}
                validators={
                    [
                        {type: 'required', errorMessage: 'Поле "пароль" обяазтельно для заполнения'},
                    ]
                }
            />
            <InputText
                name={'email'}
                id={"email"}
                title={'email'}
                autoValidate={true}
                validators={
                    [
                        {type: 'required', errorMessage: 'Поле "email" обяазтельно для заполнения'},
                    ]
                }
            />
            <Button onClick={() => {
                console.log('Клик по мышке');
            }}>Войти</Button>
        </form>
    );
};

