import React from 'react';
import {useMediaQuery} from "react-responsive";
import {ORIGINAL_IMG_URL, SMALL_IMG_URL} from "../../../API/API";

import classes from "./Poster.module.css";
import posterImg from "../../../images/poster.png";

const Poster = ({poster}) => {

    const isTablet = useMediaQuery({
        query: "(max-width: 992px)"
    });
    const IMG_URL = isTablet ? SMALL_IMG_URL : ORIGINAL_IMG_URL;
    const posterPath = poster ? `${IMG_URL}${poster}` : posterImg;

    return (
        <div className={classes.poster}>
            <img src={posterPath} alt="poster" />
        </div>
    );
};

export default Poster;