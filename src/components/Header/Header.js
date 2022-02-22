import React from 'react';
import Navbar from "./Navbar/Navbar";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className="container">
                <Navbar/>
            </div>
        </header>
    );
};

export default Header;