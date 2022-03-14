import React, {useEffect, useState} from 'react';
import MovieItem from "../../UI/MovieItem/MovieItem";
import Spinner from "../../UI/Spinner/Spinner";

import classes from "./NewReleases.module.css";

const NewReleases = ({header, url, link}) => {
    const [newMovies, setNewMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        function fetchData() {
            return fetch(`${url}`)
                .then(res => res.json())
                .then(data => setNewMovies(data.results))
                .then(() => setLoading(false));
        };
        fetchData();
    }, [url]);

    const moviesElements = newMovies.map(movie =>  (
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