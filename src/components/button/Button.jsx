import React from "react";
import PropTypes from 'prop-types';
import styles from "./Button.module.css";

const Button =({pressMore}) => {
    return (
        <>
            <button type="button" className={styles.load__more} onClick={pressMore}>Load more</button>
        </>
    );
};

Button.propTypes = {
    pressMore: PropTypes.func.isRequired
};

export default Button;