import React from "react";
import styles from "./Button.module.css";

const Button =({pressMore}) => {
    return (
        <>
            <button type="button" className={styles.load__more} onClick={pressMore}>Load more</button>
        </>
    );
};

export default Button;