import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {NavLink, useLocation} from "react-router-dom";
import {API_GENRES, API_GENRE_MOVIES, getMovies, getGenres} from "../../API/API";
import Button from "../UI/Button/Button";
import MovieItem from "../UI/MovieItem/MovieItem";
import Pagination from "../UI/Pagination/Pagination";
import Spinner from "../UI/Spinner/Spinner";

import classes from "./Genres.module.css";

const Genres = () => {
    const location = useLocation();
    const genreId = location.pathname.slice(8);
    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getGenres(API_GENRES).then(data => setGenres(data.genres));
        if (genreId) {
            getMovies(`${API_GENRE_MOVIES}${genreId}`, page)
                .then(data => {
                    setMovies(data.results);
                    setTotalPages(data.total_pages);
                }).then(() => setLoading(false));
        }
        window.scrollTo(0, 0);
    }, [genreId, page]);

    const onGenreClickHandler = useCallback(
        () => {
            setPage(1);
            setLoading(true);
        }, []
    );

    const genresElements = useMemo(() => {
        return genres.map(item => (
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
    }, [genres]);

    const moviesElements = movies.map(movie => (
        <MovieItem type="poster" {...movie} key={movie.id} link="movie" />
    ));

    return (
        <>
            <h2>Жанры</h2>
            <div className={classes.genres}>{genresElements}</div>
            <div className={classes.movies}>{loading ? <Spinner/> : moviesElements}</div>
            <>
                {movies.length
                    ? <Pagination
                        page={page}
                        setPage={setPage}
                        setLoading={setLoading}
                        totalPages={totalPages} />
                    : null
                }
            </>
        </>
    );
};

export default Genres;