import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../shared/lib/store/store";

export const Header = () => {
    const props = useSelector((state: RootState) => state.user)
    return (
        <header className="header">
            <div className="container">
                {props.firstname}
                {props.surname}
                {props.middlename}
            </div>
        </header>
    )

};
