import React from 'react';
import classes from "./Modal.module.css";
import LoginForm from "./LoginForm/LoginForm";

const Modal = ({children, type, visible, setVisible}) => {

    const rootClasses = [classes.modal];
    if (visible) {
        rootClasses.push(classes.active);
    };

    let modalContent = children;
    if (type === "login") {
        modalContent = <LoginForm setVisible={setVisible}/>;
    };

    return (
        <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
            <div className={classes.modalContent} onClick={event => event.stopPropagation()}>
                {modalContent}
            </div>
        </div>
    );
};

export default Modal;