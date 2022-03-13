import React, {useEffect, useState, useCallback} from 'react';
import {API_MOVIE_GENRES, API_SEARCH_BY_GENRE, API_LANG} from "../../API/API";
import classes from "./Genres.module.css";
import Button from "../UI/Button/Button";
import MovieItem from "../UI/MovieItem/MovieItem";
import {NavLink, useLocation} from "react-router-dom";
import Pagination from "../UI/Pagination/Pagination";
import Spinner from "../UI/Spinner/Spinner";

const Genres = () => {
    const location = useLocation();
    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const genreId = location.pathname.slice(8);

    useEffect(() => {
        function fetchMovieGenres() {
            return fetch(API_MOVIE_GENRES)
                .then(res => res.json())
                .then(data => setGenres(data.genres));
        };
        function fetchMovies() {
            return fetch(`${API_SEARCH_BY_GENRE}&with_genres=${genreId}&page=${page}${API_LANG}`)
                .then(res => res.json())
                .then(data => setMovies(data.results))
                .then(() => setLoading(false));
        };
        fetchMovieGenres();
        if (genreId) {
            fetchMovies();
        }
    }, [genreId, page]);

    const onGenreClickHandler = () => {
        setPage(1);
        setLoading(true);
    }

    const genresElements = genres.map(item => (
        <NavLink
            to={`${item.id}`}
            key={item.id}
            className={({ isActive }) => isActive
                ? `${classes.genre} ${classes.active}`
                : `${classes.genre}`}
        >
            <Button
                type="genre"
                id={item.id}
                onClick={() => onGenreClickHandler()}
            >
                {item.name}
            </Button>
        </NavLink>
    ));


    const moviesElements = movies.map(movie => (
        <MovieItem type="poster" {...movie} key={movie.id} link="movie" />
    ));

    const nextPage = () => {
        setPage(prevState => prevState + 1);
        window.scrollTo(0, 0);
    };

    const prevPage = () => {
        if (page !== 1) {
            setPage(prevState => prevState - 1);
            window.scrollTo(0, 0);
        };
    }

    return (
        <>
            <h2>Жанры</h2>
            <div className={classes.genres}>{genresElements}</div>
            <div className={classes.movies}>{loading ? <Spinner/> : moviesElements}</div>
            <>
                {movies.length ? <Pagination page={page} nextPage={nextPage} prevPage={prevPage} /> : null}
            </>
        </>
    );
};

export default Genres;