import React, {useEffect, useState} from 'react';
import {API_POPULAR} from "../../API/API";
import classes from "./Popular.module.css";
import Movie from "../UI/Movie/Movie";
import Spinner from "../UI/Spinner/Spinner";
import Button from "../UI/Button/Button";
import {useLocation, Link} from "react-router-dom";

const Popular = ({startPage}) => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    //parseInt(location.pathname.slice(9))

    useEffect(() => {
        async function fetchData() {
            return await fetch(`${API_POPULAR}&page=${page}`)
                .then(res => res.json())
                .then(data => setMovies(data.results))
                .then(() => console.log(page))
                .then(() => setLoading(false));
        };
        fetchData();
        window.scrollTo(0, 0);
    }, [location.pathname]);

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