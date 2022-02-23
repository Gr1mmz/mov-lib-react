import React from 'react';
import classes from "./Movie.module.css";
import {IMG_URL} from "../../../API/API";

const Movie = ({id, title, vote_average, poster_path}) => {
    return (
        <div className={classes.movie}>
            <img src={IMG_URL + poster_path} alt={title}/>
            <h4 className={classes.header}>{title}</h4>
            <h4 className={classes.rating}>&#9733; {vote_average}</h4>
        </div>
    );
};

export default Movie;