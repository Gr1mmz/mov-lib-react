import React, {useEffect, useState} from 'react';
import {API_POPULAR_MOVIES} from "../../API/API";
import MovieItem from "../UI/MovieItem/MovieItem";
import Spinner from "../UI/Spinner/Spinner";
import Pagination from "../UI/Pagination/Pagination";

import classes from "./Popular.module.css";

const Popular = () => {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        function fetchData() {
            return fetch(`${API_POPULAR_MOVIES}&page=${page}`)
                .then(res => res.json())
                .then(data => {
                    setTotalPages(data.total_pages);
                    setMovies(data.results);
                })
                .then(() => setLoading(false));
        };
        fetchData();
        window.scrollTo(0, 0);
    }, [page]);


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
            <Pagination page={page} setPage={setPage} setLoading={setLoading} totalPages={totalPages} />
        </div>
    );
};

export default Popular;