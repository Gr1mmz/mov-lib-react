import React from 'react';
import classes from "./MovieItem.module.css";
import {IMG_URL} from "../../../API/API";
import posterImg from "../../../images/poster.png";
import backdropImg from "../../../images/backdrop.jpg";
import {Link} from "react-router-dom";

const MovieItem = ({type, link, id, title, name, vote_average, poster_path, backdrop_path}) => {

    const poster = poster_path ? `${IMG_URL}${poster_path}` : posterImg;
    const backdrop = backdrop_path ? `${IMG_URL}${backdrop_path}` : backdropImg;

    switch (type) {
        case "poster":
            return (
                <Link to={`/${link}/${id}`} className={classes.movie}>
                    <img src={poster} alt={title}/>
                    <h4 className={classes.header}>{title}</h4>
                    <h4 className={classes.rating}>&#9733; {vote_average}</h4>
                </Link>
            );
        case "backdrop":
            return (
                <Link to={`/${link}/${id}`} className={`${classes.movie} ${classes.backdrop}`}>
                    <img src={backdrop} alt={title || name}/>
                    <h4 className={classes.header}>{title || name}</h4>
                    <h4 className={classes.rating}>&#9733; {vote_average}</h4>
                </Link>
            );
        default:
            return false;
    }
};

export default MovieItem;