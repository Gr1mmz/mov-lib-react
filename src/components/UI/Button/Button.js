import React from 'react';
import classes from "./Button.module.css";

const Button = ({type}) => {

    switch (type) {
        case "login":
            return (
                <button
                    type="button"
                    className={`${classes.btn} ${classes.login}`}
                >
                    Войти
                </button>
            )
    }
};

export default Button;