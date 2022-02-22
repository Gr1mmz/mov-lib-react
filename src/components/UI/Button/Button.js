import React from 'react';
import classes from "./Button.module.css";

const Button = ({type}) => {
    if (type === "login") {
        return (
            <a href="/" className={`${classes.btn} ${classes.login}`}>Войти</a>
        )
    }
};

export default Button;