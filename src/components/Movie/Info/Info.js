import React from 'react';
import classes from "./Info.module.css";

const Info = ({companies, budget}) => {

    const companiesElements = companies.map(company => (
            <div className={classes.company} key={company.id}>
                <div>{company.name}</div>
            </div>
        )
    );

    const movieBudget = budget ? `$${budget}` : "неизвестно";

    return (
        <div className={classes.info}>
            <div className={classes.companies}>
                <span>Компании:</span>
                {companiesElements}
            </div>
            <div><b>Бюджет: </b>{movieBudget}</div>
        </div>
    );
};

export default Info;