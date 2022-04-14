import React, { Component } from "react";
// ? import PORTAL
import {createPortal} from 'react-dom';
import styles from "./Modal.module.css";


const modalRoot = document.querySelector("#modal__root")

class Modal extends Component {
    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
    };

    // ? func
    handleKeyDown = (e) => {
        if (e.code === "Escape") { this.props.funcClose() }
    };



    handlerClick = (e) => {
        if (e.currentTarget === e.target) { this.props.funcClose() }
    };


    render() {
        const { id, big } = this.props.value;

        return createPortal(
            <div className={styles.overlay} onClick={this.handlerClick}>
                <div className={styles.modal}>
                    <img className={styles.img} src={big} alt={id} />
                </div>
            </div>,
            modalRoot
        );
    };
};

export default Modal;