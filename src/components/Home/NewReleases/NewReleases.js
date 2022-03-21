import React, {useEffect, useState} from 'react';
import MovieItem from "../../UI/MovieItem/MovieItem";
import Spinner from "../../UI/Spinner/Spinner";

import classes from "./NewReleases.module.css";
import {getMovies} from "../../../API/API";

const NewReleases = ({header, url, link}) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getMovies(url, 1)
            .then(data => {
                setMovies(data.results);
            }).then(() => setLoading(false));
    }, [url]);

    const moviesElements = movies.map(movie =>  (
        <MovieItem type="backdrop" {...movie} key={movie.id} link={link}/>
    )).slice(0, 10);

    return (
        <>
            <h2>{header}</h2>
            {loading
                ? <Spinner/>
                : <div className={classes.movies}>
                {moviesElements}
                    </div>
            }
        </>
    );
};

export default NewReleases;