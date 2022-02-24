import React, {useRef, useState} from 'react';
import searchIcon from "./search.svg";
import classes from "./Search.module.css";

const Search = () => {
    const [show, setShow] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);

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
        <div className={classes.search}>
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
            <button className={classes.button} onClick={event => showSearch(event)}>
                <img className={classes.icon} src={searchIcon} alt="search"/>
            </button>
        </div>
    );
};

export default Search;