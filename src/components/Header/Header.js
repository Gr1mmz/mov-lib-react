import React from 'react';
import {NavLink} from "react-router-dom";
import MediaQuery from "react-responsive";
import Search from "./Search/Search";
import Account from "./Account/Account";

import classes from "./Header.module.css";

const Header = ({setModal, setMobileNavbar}) => {

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
        <header className={classes.header}>
            <div className="container">
                <nav className={classes.nav}>
                    <div className={classes.links}>
                        <MediaQuery minWidth={992}>
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
                        </MediaQuery>
                        <MediaQuery maxWidth={991}>
                            <a className={classes.link} onClick={() => setMobileNavbar(true)}>Меню</a>
                        </MediaQuery>
                    </div>
                    <Search/>
                    <Account setModal={setModal}/>
                </nav>
            </div>
        </header>
    );
};

export default Header;