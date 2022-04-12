import React, { Component } from "react";
// ? import PORTAL
import {createPortal} from 'react-dom';
import styles from "./Modal.module.css";


const modalRoot = document.querySelector("#modal__root")

class Modal extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log("its update")

        window.addEventListener("keydown", e => {
            if (e.code === "Escape") {}
         });
    }

    componentWillUnmount() {
        console.log("its unmount")
    }

    render() {
        const { id, big } = this.props.value;

        return createPortal(
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <img className={styles.img} src={big} alt={id} />
                </div>
            </div>,
            modalRoot
        );
    };
};

export default Modal;