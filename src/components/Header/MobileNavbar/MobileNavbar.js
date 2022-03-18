import React from 'react';
import classes from "../Header.module.css";
import {NavLink} from "react-router-dom";

const MobileNavbar = ({visible, setVisible}) => {
    const links = [
        {
            name: "home",
            url: "/",
            text: "Главная",
        },
        {
            name: "popular",
            url: "popular",
            text: "Популярные сейчас",
        },
        {
            name: "genres",
            url: "genres",
            text: "Жанры",
        },
        {
            name: "library",
            url: "library",
            text: "Библиотека",
        }
    ];
    return (
        <div
            className={visible ? `${classes.mobileNavbar} ${classes.active}` : classes.mobileNavbar}
            onClick={() => setVisible(false)}
        >
            <div className={classes.mobileNavbarLinks} onClick={event => event.stopPropagation()}>
                {links.map(link => {
                        return (
                            <NavLink
                                to={link.url}
                                key={link.name}
                                className={({isActive}) => isActive
                                    ? `${classes.link} ${classes.link_active}`
                                    : `${classes.link}`}
                            >
                                {link.text}
                            </NavLink>)
                    }
                )}
            </div>
        </div>
    );
};

export default MobileNavbar;