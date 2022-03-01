import React, {useEffect, useState} from 'react';
import {API_POPULAR} from "../../API/API";
import classes from "./Popular.module.css";
import Movie from "../UI/Movie/Movie";
import Spinner from "../UI/Spinner/Spinner";
import {useLocation} from "react-router-dom";
import Pagination from "../UI/Pagination/Pagination";

const Popular = ({startPage}) => {
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
        window.scrollTo(0, 0);
    }, [page]);

    const nextPage = () => {
        setLoading(true);
    };
    const prevPage = () => {
        if (page !== 1) {
            setLoading(true);
        }
    };

    const moviesElements = movies.map(movie => {
        return (
            <Movie type="poster" {...movie} key={movie.id}/>
        )
    });

    return (
        <div>
            <h2>Популярные сейчас</h2>
            <div className={classes.wrapper}>
                {loading ? <Spinner/> : moviesElements}
            </div>
            <Pagination page={page} nextPage={nextPage} prevPage={prevPage} />
        </div>
    );
};

export default Popular;