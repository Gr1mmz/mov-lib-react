import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./Navbar.module.css";
import Account from "./Account/Account";
import Search from "./Search/Search";

const Navbar = () => {

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
        <nav className={classes.nav}>
            <div className={classes.links}>
                {links.map(link => {
                    return (
                        <NavLink
                            to={link.url}
                            key={link.name}
                            className={({ isActive }) => isActive
                                ? `${classes.link} ${classes.link_active}`
                                : `${classes.link}`}
                            >{link.text}
                        </NavLink>
                    )
                })}
            </div>
            <Search/>
            <Account/>
        </nav>
    );
};

export default Navbar;