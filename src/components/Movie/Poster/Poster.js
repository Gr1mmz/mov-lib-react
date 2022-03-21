import React from 'react';
import {IMG_URL} from "../../../API/API";

import classes from "./Poster.module.css";
import posterImg from "../../../images/poster.png";

const Poster = ({poster}) => {

    const posterPath = poster ? `${IMG_URL}${poster}` : posterImg;

    return (
        <div className={classes.poster}>
            <img src={posterPath} alt="poster" />
        </div>
    );
};

export default Poster;