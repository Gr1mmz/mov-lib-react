import React, {useState} from 'react';
import searchIcon from "./search.svg";
import classes from "./Search.module.css";

const Search = () => {
    const [show, setShow] = useState(false);
    const [inputValue, setInputValue] = useState("");

    function showSearch(event) {
        event.preventDefault();
        setShow(prevState => !prevState);
    };

    return (
        <div className={classes.search}>
            <input
                className={show
                    ? `${classes.input} ${classes.active}`
                    : `${classes.input}`}
                type="text"
                placeholder="Введите название фильма"
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
            />
            <button className={classes.button} onClick={event => showSearch(event)}>
                <img className={classes.icon} src={searchIcon} alt="search"/>
            </button>
        </div>
    );
};

export default Search;