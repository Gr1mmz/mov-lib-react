import React from 'react';
import bg from "../../images/bg-main.jpg";
import classes from "./Main.module.css";

const Main = ({children}) => {
    return (
        <main
            className={classes.main}
            style={{
                backgroundImage: `url(${bg})`,
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}>
            {children}
        </main>
    );
};

export default Main;