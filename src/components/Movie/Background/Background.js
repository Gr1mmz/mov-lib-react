import React from 'react';
import classes from "./Background.module.css";
import backdropImg from "../../../images/bg-main.jpg";

const Background = ({backdrop}) => {

    const backdropPath = backdrop ? `https://image.tmdb.org/t/p/original${backdrop}` : backdropImg;

    if (backdrop) {
        return (
            <div className={classes.layout}>
                <div
                    className={classes.backdrop}
                    style={{
                        backgroundImage: `url(${backdropPath})`,
                        backgroundSize: "cover",
                    }}
                >
                    <div className={classes.gradient}></div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default Background;