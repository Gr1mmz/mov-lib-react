import React, {useEffect, useState} from 'react';
import {getPopular, transformMovie, API_POPULAR} from "../../API/API";

const Popular = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await fetch(API_POPULAR)
                .then(res => res.json())
                .then(data => setMovies(data.results));
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Популярные сейчас</h2>
            {movies.map(movie => {
                return (
                    <div key={movie.id}>
                        <h4>{movie.id}</h4>
                        <h4>{movie.title}</h4>
                        <h4>{movie.vote_average}</h4>
                        <p>{movie.overview}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Popular;