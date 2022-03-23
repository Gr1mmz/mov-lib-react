import React from 'react';
import {Link} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import {ORIGINAL_IMG_URL, SMALL_IMG_URL} from "../../../API/API";

import classes from "./MovieItem.module.css";
import posterImg from "../../../images/poster.png";
import backdropImg from "../../../images/backdrop.jpg";

const MovieItem = ({type, link, id, title, name, vote_average, poster_path, backdrop_path}) => {

    const isTablet = useMediaQuery({
        query: "(max-width: 992px)"
    });
    const IMG_URL = isTablet ? SMALL_IMG_URL : ORIGINAL_IMG_URL;
    const poster = poster_path ? `${IMG_URL}${poster_path}` : posterImg;
    const backdrop = backdrop_path ? `https://image.tmdb.org/t/p/original${backdrop_path}` : backdropImg;
    const rating = vote_average
        ? <h4 className={classes.rating}>&#9733; {+vote_average.toFixed(1)}</h4>
        : null;

    switch (type) {
        case "poster":
            return (
                <Link to={`/${link}/${id}`} className={classes.movie}>
                    <img src={poster} alt={title || name}/>
                    <h4 className={classes.header}>{title || name}</h4>
                    {rating}
                </Link>
            );
        case "backdrop":
            return (
                <Link to={`/${link}/${id}`} className={`${classes.movie} ${classes.backdrop}`}>
                    <img src={backdrop} alt={title || name}/>
                    <h4 className={classes.header}>{title || name}</h4>
                    {rating}
                </Link>
            );
        default:
            return false;
    }
};

export default MovieItem;