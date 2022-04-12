import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ value }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <img className={styles.img} src={value.big} alt={value.id} />
            </div>
        </div>
    )
}

export default Modal;