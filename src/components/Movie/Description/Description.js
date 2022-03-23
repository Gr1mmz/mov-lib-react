import React from 'react';
import classes from "./Description.module.css";
import Button from "../../UI/Button/Button";

const Description = ({movie, trailers}) => {

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

    const genresElements = movie.genres.map(genre => (
            <Button type="genre" id={genre.id}>
                {genre.name}
            </Button>
        )
    );

    const rating = movie.vote_average ? movie.vote_average : "нет данных";

    const overview = movie.overview ? movie.overview : "Описания пока нет";

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
            }
        }) : <div>Трейлеров пока нет</div>;

    return (
        <div className={classes.description}>
            <h2 className={classes.title}>{movie.title || movie.name}</h2>
            <div><b>Дата выхода: </b>{releaseDate}</div>
            <div className={classes.genres}>
                <span>Жанры:</span>
                {genresElements}
            </div>
            {movie.vote_average
                ? <div className={classes.rating}>
                    <b>Рейтинг: </b>&#9733; {rating}
                </div>
            : <div>
                    <b>Рейтинг: </b>{rating}
                </div>}
            <div><span>Описание:</span>{overview}</div>
            <div className={classes.trailers}>
                <span>Трейлеры:</span>
                {trailersElements}
            </div>
        </div>
    );
};

export default Description;