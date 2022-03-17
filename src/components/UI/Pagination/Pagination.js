import React from 'react';
import Button from "../Button/Button";

import classes from "./Pagination.module.css";

const Pagination = ({page, setPage, setLoading, totalPages}) => {

    const prevPage = () => {
        if (page !== 1) {
            setPage(prevState => prevState - 1);
            setLoading(true);
        };
    };

    const nextPage = () => {
        if (page !== totalPages) {
            setPage(prevState => prevState + 1);
            setLoading(true);
        }
    };

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
};

export default Pagination;