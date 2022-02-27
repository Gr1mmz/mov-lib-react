import React, {useEffect, useState} from 'react';
import {API_NEW_RELEASES} from "../../../API/API";
import Movie from "../../UI/Movie/Movie";
import classes from "./NewReleases.module.css";
import Spinner from "../../UI/Spinner/Spinner";

const NewReleases = ({header, url}) => {
    const [newMovies, setNewMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            return await fetch(`${url}`)
                .then(res => res.json())
                .then(data => setNewMovies(data.results))
                .then(() => setLoading(false));
        };
        fetchData();
    }, []);

    const moviesElements = newMovies.map(movie => {
        return (
            <Movie type="backdrop" {...movie} key={movie.id}/>
        )
    }).slice(0, 10);

    return (
        <>
            <h2>{header}</h2>
            {loading
                ? <Spinner/>
                : <div className={classes.movies}>
                {moviesElements}
                    </div>
            }
        </>
    );
};

export default NewReleases;