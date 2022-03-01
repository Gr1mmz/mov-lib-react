import React, {useEffect, useState} from 'react';
import {API_POPULAR} from "../../API/API";
import classes from "./Popular.module.css";
import Movie from "../UI/Movie/Movie";
import Spinner from "../UI/Spinner/Spinner";
import Button from "../UI/Button/Button";
import {useLocation, Link} from "react-router-dom";

const Popular = () => {
    const location = useLocation();
    const page = parseInt(location.pathname.slice(9));
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            return await fetch(`${API_POPULAR}&page=${page}`)
                .then(res => res.json())
                .then(data => setMovies(data.results))
                // .then(() => console.log(page))
                // .then(() => console.log(location.pathname))
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
            <div className={classes.pagination}>
                <Link to={`${page !== 1 ? page - 1 : page}`}>
                    <Button name="pagination" onClick={() => prevPage()}>
                        &lt; Назад
                    </Button>
                </Link>
                {page}
                <Link to={`${page + 1}`}>
                    <Button name="pagination" onClick={() => nextPage()}>
                        Вперед &gt;
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Popular;