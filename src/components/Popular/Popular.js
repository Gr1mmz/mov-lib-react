import React, {useEffect, useState} from 'react';
import {getPopular, transformMovie, API_POPULAR} from "../../API/API";
import classes from "./Popular.module.css";
import Movie from "../UI/Movie/Movie";
import Spinner from "../UI/Spinner/Spinner";

const Popular = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            return await fetch(API_POPULAR)
                .then(res => res.json())
                .then(data => setMovies(data.results))
                .then(setLoading(false));
        };
        fetchData();
        return () => {
            setLoading(true);
        }
    }, []);

    const moviesElements = movies.map(movie => {
        return (
            <Movie {...movie} key={movie.id}/>
        )
    });

    return (
        <div>
            <h2>Популярные сейчас</h2>
            <div className={classes.wrapper}>
                {loading ? <Spinner/> : moviesElements}
            </div>
        </div>
    );
};

export default Popular;