import React, {useCallback} from 'react';
import Button from "../../UI/Button/Button";

import classes from "../Header.module.css";

const Account = ({setModal}) => {

    const onLoginClick = useCallback(
        (event) => {
            event.preventDefault();
            setModal(true);
        }, [setModal]
    );

    return (
        <div className={classes.account}>
            <a href="/" className={classes.link}>Аккаунт</a>
            <Button type="login" onClick={(event) => onLoginClick(event)}>Войти</Button>
        </div>
    );
};

export default Account;