import React from 'react';
import classes from "./Pagination.module.css";
import {NavLink} from "react-router-dom";
import Button from "../Button/Button";

const Pagination = ({page, prevPage, nextPage, setUrl}) => {
    if (setUrl) {
        return (
            <div className={classes.pagination}>
                <NavLink to={`${page !== 1 ? page - 1 : page}`} className={classes.link}>
                    <Button onClick={() => prevPage()}>
                        &lt; Назад
                    </Button>
                </NavLink>
                {page}
                <NavLink to={`${page + 1}`} className={classes.link}>
                    <Button onClick={() => nextPage()}>
                        Вперед &gt;
                    </Button>
                </NavLink>
            </div>
        );
    } else {
        return (
            <div className={classes.pagination}>
                <Button onClick={() => prevPage()}>
                    &lt; Назад
                </Button>
                {page}
                <Button onClick={() => nextPage()}>
                    Вперед &gt;
                </Button>
            </div>
        );
    }
};

export default Pagination;