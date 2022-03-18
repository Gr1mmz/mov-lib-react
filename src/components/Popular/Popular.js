import React, {useEffect, useState} from 'react';
import {API_POPULAR_MOVIES, getMovies} from "../../API/API";
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
        getMovies(API_POPULAR_MOVIES, page, setLoading, setMovies, setTotalPages);
        window.scrollTo(0, 0);
        return () => {
            setMovies([]);
            setTotalPages(1);
            setLoading(true);
        }
    }, [page]);


    const moviesElements = movies.map(movie =>  (
            <MovieItem type="poster" {...movie} key={movie.id} link="movie"/>
        )
    );

    return (
        <>
            <h2>Популярные сейчас</h2>
            <div className={classes.wrapper}>
                {loading ? <Spinner/> : moviesElements}
            </div>
            <Pagination page={page} setPage={setPage} setLoading={setLoading} totalPages={totalPages} />
        </>
    );
};

export default Popular;