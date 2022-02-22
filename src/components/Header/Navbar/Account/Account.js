import React from 'react';
import classes from "../Navbar.module.css";
import Button from "../../../UI/Button/Button";

const Account = () => {
    return (
        <div className={classes.account}>
            <a href="" className={classes.link}>Аккаунт</a>
            <Button type="login"/>
        </div>
    );
};

export default Account;