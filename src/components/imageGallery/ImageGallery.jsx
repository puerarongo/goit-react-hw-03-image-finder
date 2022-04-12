import React from "react";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({children}) => {
    return (
        <ul className={styles.gallery}>
            {children}
        </ul>
    );
};

export default ImageGallery;