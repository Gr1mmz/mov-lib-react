import React, {useRef, useState} from 'react';
import searchIcon from "./search.svg";
import classes from "./Search.module.css";
import {useNavigate} from "react-router-dom";

const Search = () => {
    const [show, setShow] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const handlerOnSubmit = (event) => {
        event.preventDefault();
        if (inputValue) {
            navigate(`/search/${inputValue}`, {replace: true});
        }
    };

    function showSearch(event) {
        event.preventDefault();
        setShow(prevState => !prevState);
        if (show) {
            inputRef.current.blur();
        } else {
            inputRef.current.focus();
        }
    };

    return (
        <form className={classes.search} onSubmit={handlerOnSubmit}>
            <input
                className={show
                    ? `${classes.input} ${classes.active}`
                    : `${classes.input}`}
                type="text"
                placeholder="Введите название фильма"
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
                ref={inputRef}
            />
            <button type="button" className={classes.button} onClick={event => showSearch(event)}>
                <img className={classes.icon} src={searchIcon} alt="search"/>
            </button>

        </form>
    );
};

export default Search;