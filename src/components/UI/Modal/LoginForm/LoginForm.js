import React from 'react';
import classes from "./LoginForm.module.css";
import Button from "../../Button/Button";

const LoginForm = ({setVisible}) => {
    return (
        <div className={classes.login}>
            <div className={classes.loginForm}>
                <h3>Войти</h3>
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="Пароль"/>
                <Button onClick={() => setVisible(false)}>Войти</Button>
            </div>
            <div className={classes.loginSocial}>
                <h3>Войти с помощью</h3>
                <div className={classes.social}>
                    <a href="/">
                        VK
                    </a>
                    <a href="/">
                        Telegram
                    </a>
                    <a href="/">
                        Discord
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;