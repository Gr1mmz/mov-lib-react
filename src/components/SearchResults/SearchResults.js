import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {API_SEARCH_QUERY, getMovies} from "../../API/API";
import MovieItem from "../UI/MovieItem/MovieItem";
import Spinner from "../UI/Spinner/Spinner";
import Pagination from "../UI/Pagination/Pagination";

import classes from "../Popular/Popular.module.css";

const SearchResults = () => {
    const location = useLocation();
    const searchQuery = location.pathname.slice(8);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMovies(`${API_SEARCH_QUERY}${searchQuery}`, page, setLoading, setMovies, setTotalPages);
        window.scrollTo(0, 0);
    }, [searchQuery, page]);

    useEffect(() => {
        setPage(1);
    }, [searchQuery])

    const nothingWasFounded =
        <p style={{fontSize: "24px", marginTop: "20px"}}>
            {`По запросу "${decodeURI(searchQuery)}" ничего не найдено :(`}
        </p>;

    const moviesElements = movies.length
    ? movies.map(movie => (<MovieItem type="poster" {...movie} key={movie.id} link="movie"/>))
    : nothingWasFounded;

    return (
        <div className="container">
            <h2>Результаты поиска</h2>
            <div className={classes.wrapper}>
                {loading ? <Spinner/> : moviesElements}
            </div>
            <>
                {totalPages > 1
                    ? <Pagination
                        page={page}
                        setPage={setPage}
                        setLoading={setLoading}
                        totalPages={totalPages} />
                    : null
                }
            </>
        </div>
    );
};

export default SearchResults;