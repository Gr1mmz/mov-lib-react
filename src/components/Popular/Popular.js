import React, {useEffect, useState} from 'react';
import {API_POPULAR} from "../../API/API";
import classes from "./Popular.module.css";
import MovieItem from "../UI/MovieItem/MovieItem";
import Spinner from "../UI/Spinner/Spinner";
import {useLocation} from "react-router-dom";
import Pagination from "../UI/Pagination/Pagination";

const Popular = () => {
    const location = useLocation();
    const page = location.pathname.slice(9) ? parseInt(location.pathname.slice(9)) : 1;
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            return await fetch(`${API_POPULAR}&page=${page}`)
                .then(res => res.json())
                .then(data => setMovies(data.results))
                .then(() => setLoading(false));
        };
        fetchData();
    }, [page]);

    const nextPage = () => {
        setLoading(true);
        window.scrollTo(0, 0);
    };
    const prevPage = () => {
        if (page !== 1) {
            setLoading(true);
            window.scrollTo(0, 0);
        }
    };

    const moviesElements = movies.map(movie => {
        return (
            <MovieItem type="poster" {...movie} key={movie.id}/>
        )
    });

    return (
        <div className="container">
            <h2>Популярные сейчас</h2>
            <div className={classes.wrapper}>
                {loading ? <Spinner/> : moviesElements}
            </div>
            <Pagination page={page} nextPage={nextPage} prevPage={prevPage} />
        </div>
    );
};

export default Popular;