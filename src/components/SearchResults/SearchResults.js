import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {API_SEARCH} from "../../API/API";
import Movie from "../UI/Movie/Movie";
import classes from "../Popular/Popular.module.css";
import Spinner from "../UI/Spinner/Spinner";

const SearchResults = () => {
    const location = useLocation();
    const searchQuery = location.pathname.slice(8);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            return await fetch(`${API_SEARCH}&query=${searchQuery}`)
                .then(res => res.json())
                .then(data => setMovies(data.results))
                .then(() => setLoading(false));
        };
        fetchData();
        window.scrollTo(0, 0);
    }, [searchQuery]);

    const moviesElements = movies.map(movie => {
        return (
            <Movie type="poster" {...movie} key={movie.id}/>
        )
    });

    return (
        <>
            <h2>Результаты поиска</h2>
            <div className={classes.wrapper}>
                {loading ? <Spinner/> : moviesElements}
            </div>
        </>
    );
};

export default SearchResults;