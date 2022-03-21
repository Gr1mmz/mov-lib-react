import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {getMovieInfo} from "../../API/API";
import Spinner from "../UI/Spinner/Spinner";
import Background from "./Background/Background";
import Poster from "./Poster/Poster";
import Description from "./Description/Description";
import Info from "./Info/Info";
import Similar from "./Similar/Similar";

import classes from "./Movie.module.css";

const Movie = () => {
    const location = useLocation();

    let link = "movie";
    if (location.pathname.indexOf("tv") !== -1) {
        link = "tv";
    };

    let id = location.pathname.slice(7);
    if (link === "tv") {
        id = location.pathname.slice(4);
    };

    const [movie, setMovie] = useState({});
    const [trailers, setTrailers] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMovieInfo(link, id)
            .then(data => {
            setMovie(data.info);
            setTrailers(data.trailers);
            setSimilarMovies(data.similar);
            }).then(() => setLoading(false));
        window.scrollTo(0, 0);
    }, [link, id]);

    return (
        <>
            <Background backdrop={movie.backdrop_path}/>
            {loading
            ? <Spinner/>
            : <div className={classes.movie}>
                    <div className={classes.wrapper}>
                        <Poster poster={movie.poster_path}/>
                        <Description movie={movie} trailers={trailers}/>
                        <Info budget={movie.budget} companies={movie.production_companies}/>
                        <Similar similar={similarMovies} link={link}/>
                    </div>
                </div>}
        </>
    );
};

export default Movie;