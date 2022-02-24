import React from 'react';
import classes from "../Navbar.module.css";
import Button from "../../../UI/Button/Button";

const Account = () => {

    function onLoginClick(event) {
        event.preventDefault();
    }

    return (
        <div className={classes.account}>
            <a href="" className={classes.link}>Аккаунт</a>
            <Button type="login" onClick={(event) => onLoginClick(event)}/>
        </div>
    );
};

export default Account;