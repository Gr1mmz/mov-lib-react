import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {API_SEARCH} from "../../API/API";
import MovieItem from "../UI/MovieItem/MovieItem";
import classes from "../Popular/Popular.module.css";
import Spinner from "../UI/Spinner/Spinner";
import Pagination from "../UI/Pagination/Pagination";

const SearchResults = () => {
    const location = useLocation();
    const searchQuery = location.pathname.slice(8);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        function fetchData() {
            return fetch(`${API_SEARCH}&query=${searchQuery}&page=${page}`)
                .then(res => res.json())
                .then(data => {
                    setTotalPages(data.total_pages);
                    setMovies(data.results);
                })
                .then(() => setLoading(false));
        };
        fetchData();
        window.scrollTo(0, 0);
    }, [searchQuery, page]);

    useEffect(() => {
        setPage(1);
    }, [searchQuery])

    const nextPage = () => {
        setPage(prevState => prevState + 1);
    }

    const prevPage = () => {
        if (page !== 1) {
            setPage(prevState => prevState - 1);
        };
    }

    const moviesElements = movies.map(movie => (
            <MovieItem type="poster" {...movie} key={movie.id} link="movie"/>
        )
    );

    return (
        <div className="container">
            <h2>Результаты поиска</h2>
            <div className={classes.wrapper}>
                {loading ? <Spinner/> : moviesElements}
            </div>
            <>
                {totalPages > 1 ? <Pagination page={page} nextPage={nextPage} prevPage={prevPage} /> : null}
            </>
        </div>
    );
};

export default SearchResults;