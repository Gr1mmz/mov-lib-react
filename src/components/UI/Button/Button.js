import React from 'react';
import {Link, NavLink} from "react-router-dom";
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
                <NavLink
                    to={`/genres/${id}`}
                    id={id}
                    onClick={onClick}
                    className={({ isActive }) => isActive
                        ? `${classes.btn} ${classes.genre} ${classes.active}`
                        : `${classes.btn} ${classes.genre}`}
                >
                    {children}
                </NavLink>
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