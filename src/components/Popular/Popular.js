import React, {useCallback, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {API_POPULAR_MOVIES} from "../../API/API";
import MovieItem from "../UI/MovieItem/MovieItem";
import Spinner from "../UI/Spinner/Spinner";
import Pagination from "../UI/Pagination/Pagination";

import classes from "./Popular.module.css";

const Popular = () => {
    const location = useLocation();
    const page = location.pathname.slice(9) ? parseInt(location.pathname.slice(9)) : 1;
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        function fetchData() {
            return fetch(`${API_POPULAR_MOVIES}&page=${page}`)
                .then(res => res.json())
                .then(data => setMovies(data.results))
                .then(() => setLoading(false));
        };
        fetchData();
        window.scrollTo(0, 0);
    }, [page]);

    const nextPage = useCallback(
        () => {
            setLoading(true);
        }, []
    );

    const prevPage = useCallback(
        () => {
            if (page !== 1) {
                setLoading(true);
            };
        }, [page]
    );

    const moviesElements = movies.map(movie =>  (
            <MovieItem type="poster" {...movie} key={movie.id} link="movie"/>
        )
    );

    return (
        <div className="container">
            <h2>Популярные сейчас</h2>
            <div className={classes.wrapper}>
                {loading ? <Spinner/> : moviesElements}
            </div>
            <Pagination page={page} nextPage={nextPage} prevPage={prevPage} setUrl="true" />
        </div>
    );
};

export default Popular;