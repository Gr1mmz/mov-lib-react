import React from 'react';
import web from "./web.png";
import telegram from "./telegram.png";
import email from "./email.png";
import linkedin from "./linkedin.png";
import vk from "./vk.png";
import instagram from "./instagram.png";
import classes from "./Footer.module.css";

const Footer = () => {
    const date = new Date();
    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className={classes.wrapper}>
                    <div>
                        <h3>Movie Library app by Mikhail Kraevskiy</h3>
                        <p className={classes.copyright}>© Все права защищены, {date.getFullYear()}</p>
                    </div>
                    <div className={classes.links}>
                        <a
                            className={classes.link}
                            href="https://kraevskiy-web.ru/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={web} alt="сайт"/>
                        </a>
                        <a
                            className={classes.link}
                            href="https://t.me/gr1mmz"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={telegram} alt="телеграм"/>
                        </a>
                        <a
                            className={classes.link}
                            href="mailto:admin@kraevskiy-web.ru"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={email} alt="email"/>
                        </a>
                        <a
                            className={classes.link}
                            href="https://www.linkedin.com/in/mikhail-kraevskiy-32a013205/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={linkedin} alt="linkedin"/>
                        </a>
                        <a
                            className={classes.link}
                            href="https://vk.com/rumblesackcabbagepatch"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={vk} alt="ВКонтакте"/>
                        </a>
                        <a
                            className={classes.link}
                            href="https://www.instagram.com/mr_gr1mmz/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={instagram} alt="инстаграм"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;