import React from 'react';
import classes from "./Button.module.css";

const Button = ({type, children, onClick, id}) => {

    switch (type) {
        case "login":
            return (
                <button
                    onClick={onClick}
                    type="button"
                    className={`${classes.btn} ${classes.login}`}
                >
                    {children}
                </button>
            )
        case "genre":
            return (
                <button
                    onClick={onClick}
                    type="button"
                    id={id}
                    className={`${classes.btn} ${classes.genre}`}
                >
                    {children}
                </button>
            )
        default:
            return (
                <button
                    onClick={onClick}
                    type="button"
                    className={`${classes.btn}`}
                >
                    {children}
                </button>
            )
    }
};

export default Button;