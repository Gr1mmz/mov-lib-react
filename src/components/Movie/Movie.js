import React, {useEffect, useState} from 'react';
import classes from "./Movie.module.css";
import {useLocation} from "react-router-dom";
import {API_KEY, API_LANG, BASE_URL, IMG_URL} from "../../API/API";
import Spinner from "../UI/Spinner/Spinner";
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
    }
    const [movie, setMovie] = useState({
        genres: [],
        production_companies: [],
        backdrop_path: "",
        budget: 0,
        overview: "",
    });
    const [trailers, setTrailers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            return await fetch(`${BASE_URL}/${link}/${id}?${API_KEY}${API_LANG}`)
                .then(res => res.json())
                .then(data => setMovie(data))
                .then(() => console.log(movie))
                .then(() => setLoading(false));
        }
        async function fetchTrailers() {
            return await fetch(`${BASE_URL}/${link}/${id}/videos?${API_KEY}${API_LANG}`)
                .then(res => res.json())
                .then(videoData => setTrailers(videoData.results));
            }
        fetchData();
        fetchTrailers();
        window.scrollTo(0, 0);
    }, []);

    const backdrop = movie.backdrop_path
        ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
        : backdropImg;

    const poster = movie.poster_path
        ? `${IMG_URL}${movie.poster_path}`
        : posterImg;

    const genresElements = movie.genres.map(genre => {
        return (
            <div className={classes.genre} key={genre.id}>
                <div>{genre.name}</div>
            </div>
        )
    });

    const companiesElements = movie.production_companies.map(company => {
        return (
            <div className={classes.company} key={company.id}>
                <div>{company.name}</div>
            </div>
        )
    });

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
                )
            }
        }) : <div>Трейлеров пока нет</div>

    const budget = movie.budget
        ? `$${movie.budget}`
        : `неизвестно`;

    const overview = movie.overview
        ? movie.overview
        : `Описания пока нет`;

    const releaseDate = movie.release_date
        ? movie.release_date
        : `нет данных`

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
                        </div>
                    </div>
                </div>}
        </>
    );
};

export default Movie;