import React from 'react';
import {useMediaQuery} from "react-responsive";
import {ORIGINAL_IMG_URL, SMALL_IMG_URL} from "../../../API/API";

import classes from "./Background.module.css";
import backdropImg from "../../../images/bg-main.jpg";

const Background = ({backdrop}) => {

    const isTablet = useMediaQuery({
        query: "(max-width: 992px)"
    });
    const IMG_URL = isTablet ? SMALL_IMG_URL : ORIGINAL_IMG_URL;
    const backdropPath = backdrop ? `${IMG_URL}${backdrop}` : backdropImg;

    if (backdrop) {
        return (
            <div className={classes.layout}>
                <div
                    className={classes.backdrop}
                    style={{
                        backgroundImage: `url(${backdropPath})`,
                        // backgroundSize: "cover",
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