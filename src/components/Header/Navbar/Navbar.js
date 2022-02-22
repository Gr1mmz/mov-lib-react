import React from 'react';
import {Link} from "react-router-dom";
import classes from "./Navbar.module.css";
import Account from "./Account/Account";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.links}>
                <Link to="/" className={classes.link}>Главная</Link>
                <Link to="/popular" className={classes.link}>Популярные</Link>
                <Link to="/genres" className={classes.link}>Жанры</Link>
                <Link to="/library" className={classes.link}>Библиотека</Link>
            </div>
            <Account/>
        </nav>
    );
};

export default Navbar;