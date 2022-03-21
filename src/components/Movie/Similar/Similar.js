import React from 'react';
import classes from "./Similar.module.css";
import MovieItem from "../../UI/MovieItem/MovieItem";

const Similar = ({similar, link}) => {

    const similarElements = similar.slice(0, 4).map(movie => (
        <MovieItem type="poster" {...movie} key={movie.id} link={link}/>
    ));

    return (
        <div className={classes.similar}>
            <span>Похожие фильмы:</span>
            <div>{similarElements}</div>
        </div>
    );
};

export default Similar;