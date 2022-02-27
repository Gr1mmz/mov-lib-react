import React from 'react';
import classes from "./Movie.module.css";
import {IMG_URL} from "../../../API/API";

const Movie = ({type, id, title, name, vote_average, poster_path, backdrop_path}) => {
    switch (type) {
        case "poster":
            return (
                <div className={classes.movie}>
                    <img src={IMG_URL + poster_path} alt={title}/>
                    <h4 className={classes.header}>{title}</h4>
                    <h4 className={classes.rating}>&#9733; {vote_average}</h4>
                </div>
            );
        case "backdrop":
            return (
                <div className={`${classes.movie} ${classes.backdrop}`}>
                    <img src={IMG_URL + backdrop_path} alt={title || name}/>
                    <h4 className={classes.header}>{title || name}</h4>
                    <h4 className={classes.rating}>&#9733; {vote_average}</h4>
                </div>
            );
    }
};

export default Movie;