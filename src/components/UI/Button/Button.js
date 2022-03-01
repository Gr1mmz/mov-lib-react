import React from 'react';
import classes from "./Button.module.css";

const Button = ({type, children, onClick}) => {

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
        case "pagination":
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