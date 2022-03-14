import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import {API_KEY, API_LANG, BASE_URL, IMG_URL} from "../../API/API";
import Spinner from "../UI/Spinner/Spinner";
import Button from "../UI/Button/Button";
import MovieItem from "../UI/MovieItem/MovieItem";

import classes from "./Movie.module.css";
import backdropImg from "../../images/bg-main.jpg";
import posterImg from "../../images/poster.png";

const Movie = () => {
    const location = useLocation();

    let link = "";
    if (location.pathname.indexOf("tv") !== -1) {
        link = "tv";
    } else {
        link = "movie";
    };

    let id = 0;
    if (link === "tv") {
        id = location.pathname.slice(4);
    } else {
        id = location.pathname.slice(7);
    };

    const [movie, setMovie] = useState({
        genres: [],
        production_companies: [],
        backdrop_path: "",
        budget: 0,
        overview: "",
    });
    const [trailers, setTrailers] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [similarTv, setSimilarTv] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        function fetchData() {
            return fetch(`${BASE_URL}/${link}/${id}?${API_KEY}${API_LANG}`)
                .then(res => res.json())
                .then(data => setMovie(data))
                .then(() => setLoading(false));
        }
        function fetchTrailers() {
            return fetch(`${BASE_URL}/${link}/${id}/videos?${API_KEY}${API_LANG}`)
                .then(res => res.json())
                .then(videoData => setTrailers(videoData.results));
            }
        function fetchSimilarMovies() {
            return fetch(`${BASE_URL}/${link}/${id}/similar?${API_KEY}${API_LANG}`)
                .then(res => res.json())
                .then(data => {
                    if (link === "movie") {
                        setSimilarMovies(data.results);
                    } else {
                        setSimilarTv(data.results);
                    };
                });
        }
        fetchData();
        fetchTrailers();
        fetchSimilarMovies();
        window.scrollTo(0, 0);
    }, [id, link]);

    const backdrop = movie.backdrop_path ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : backdropImg;
    const poster = movie.poster_path ? `${IMG_URL}${movie.poster_path}` : posterImg;

    const genresElements = movie.genres.map(genre => (
         <Link to={`/genres/${genre.id}`} key={genre.id} className={classes.genre}>
             <Button type="genre" id={genre.id}>
                 {genre.name}
             </Button>
         </Link>
        )
    );

    const companiesElements = movie.production_companies.map(company => (
            <div className={classes.company} key={company.id}>
                <div>{company.name}</div>
            </div>
        )
    );

    const trailersElements = trailers.length
        ? trailers.map(trailer => {
            let { key, name, site, type } = trailer;
            if (site === "YouTube" && type === "Trailer") {
                return (
                    <iframe
                        key={key}
                        src={`https://www.youtube.com/embed/${key}`}
                        title={name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                );
            };
        })
        : <div>Трейлеров пока нет</div>;

    const budget = movie.budget ? `$${movie.budget}` : "неизвестно";
    const overview = movie.overview ? movie.overview : "Описания пока нет";

    let releaseDate = "нет данных";
    if (movie.release_date) {
        let formattedDate = movie.release_date.split("-").reverse();
        switch (formattedDate[1]) {
            case "01":
                formattedDate[1] = "января";
                break;
            case "02":
                formattedDate[1] = "февраля";
                break;
            case "03":
                formattedDate[1] = "марта";
                break;
            case "04":
                formattedDate[1] = "апреля";
                break;
            case "05":
                formattedDate[1] = "мая";
                break;
            case "06":
                formattedDate[1] = "июня";
                break;
            case "07":
                formattedDate[1] = "июля";
                break;
            case "08":
                formattedDate[1] = "августа";
                break;
            case "09":
                formattedDate[1] = "сентября";
                break;
            case "10":
                formattedDate[1] = "октября";
                break;
            case "11":
                formattedDate[1] = "ноября";
                break;
            case "12":
                formattedDate[1] = "декабря";
                break;
            default:
                formattedDate[1] = "";
        };
        releaseDate = formattedDate.join(" ");
    };

    const similarElements = link === "movie"
    ? similarMovies.slice(0, 4).map(movie => (<MovieItem type="poster" {...movie} key={movie.id} link="movie"/>))
        : similarTv.slice(0, 4).map(movie => (<MovieItem type="poster" {...movie} key={movie.id} link="tv"/>));

    return (
        <>
            <div className={classes.layout}>
                <div
                    className={classes.backdrop}
                    style={{
                        backgroundImage: `url(${backdrop})`,
                        backgroundSize: "cover",
                    }}
                >
                    <div className={classes.gradient}>
                    </div>
                </div>
            </div>
            {loading
            ? <Spinner/>
            : <div className={classes.movie}>
                    <div className="container">
                        <div className={classes.wrapper}>
                            <div className={classes.poster}>
                                <img src={poster} alt="poster" />
                            </div>
                            <div className={classes.description}>
                                <h2 className={classes.title}>{movie.title || movie.name}</h2>
                                <div><b>Дата выхода: </b>{releaseDate}</div>
                                <div className={classes.genres}>
                                    <span>Жанры:</span>
                                    {genresElements}
                                </div>
                                <div className={classes.rating}>
                                    <b>Рейтинг: </b>&#9733; {movie.vote_average}
                                </div>
                                <div><span>Описание:</span>{overview}</div>
                                <div className={classes.trailers}>
                                    <span>Трейлеры:</span>
                                    {trailersElements}
                                </div>
                            </div>
                            <div className={classes.info}>
                                <div className={classes.companies}>
                                    <span>Компании:</span>
                                    {companiesElements}
                                </div>
                                <div><b>Бюджет: </b>{budget}</div>
                            </div>
                            <div className={classes.similar}>
                                <span>Похожие фильмы:</span>
                                <div>{similarElements}</div>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    );
};

export default Movie;