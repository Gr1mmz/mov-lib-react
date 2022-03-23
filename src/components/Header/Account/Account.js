import React, {useCallback, useState} from 'react';
import MediaQuery from "react-responsive";
import Button from "../../UI/Button/Button";

import userIcon from "./user.png";
import classes from "../Header.module.css";

const Account = ({setModal}) => {

    const [isLogged, setIsLogged] = useState(false);

    const onLoginClick = useCallback(
        (event) => {
            event.preventDefault();
            setModal(true);
        }, [setModal]
    );

    return (
        <div className={classes.account}>
            {isLogged
            ? <>
                <MediaQuery minWidth={576}>
                    <a href="/" className={classes.link}>Аккаунт</a>
                </MediaQuery>
                <MediaQuery maxWidth={575}>
                    <a href="/" className={`${classes.link} ${classes.linkIcon}`}>
                        <img src={userIcon} alt=""/>
                    </a>
                </MediaQuery>
                </>
            : <Button type="login" onClick={(event) => onLoginClick(event)}>Войти</Button>}
        </div>
    );
};

export default Account;