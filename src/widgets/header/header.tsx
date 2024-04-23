import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../shared/lib/store/store";
import { InputText } from "../../shared/ui/formItems/InputText";

export const Header = () => {
    const props = useSelector((state: RootState) => state.user)
    return (
        <header className="header">
            <div className="container">
                {props.firstname}
                {props.surname}
                {props.middlename}
                <InputText/>
            </div>
        </header>
    )

};
