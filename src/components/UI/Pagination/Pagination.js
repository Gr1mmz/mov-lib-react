import React from 'react';
import classes from "./Pagination.module.css";
import {Link} from "react-router-dom";
import Button from "../Button/Button";

const Pagination = ({page, prevPage, nextPage}) => {
    return (
        <div className={classes.pagination}>
            <Link to={`${page !== 1 ? page - 1 : page}`}>
                <Button type="pagination" onClick={() => prevPage()}>
                    &lt; Назад
                </Button>
            </Link>
            {page}
            <Link to={`${page + 1}`}>
                <Button type="pagination" onClick={() => nextPage()}>
                    Вперед &gt;
                </Button>
            </Link>
        </div>
    );
};

export default Pagination;