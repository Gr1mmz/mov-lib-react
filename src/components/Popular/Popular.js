import React, {useEffect, useState} from 'react';
import {getPopular, transformMovie, API_POPULAR} from "../../API/API";
import classes from "./Popular.module.css";
import Movie from "../UI/Movie/Movie";
import Spinner from "../UI/Spinner/Spinner";
import Button from "../UI/Button/Button";

const Popular = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
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
        setPage(prev => prev + 1);
    };
    const prevPage = () => {
        if (page !== 1) {
            setLoading(true);
            setPage(prev => prev - 1);
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
            <div className={classes.pagination}>
                <Button name="pagination" onClick={() => prevPage()}>
                    &lt; Назад
                </Button>
                {page}
                <Button name="pagination" onClick={() => nextPage()}>
                    Вперед &gt;
                </Button>
            </div>
        </div>
    );
};

export default Popular;