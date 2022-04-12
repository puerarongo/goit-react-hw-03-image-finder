import React from "react";
import styles from "./ImageGalleryItem.module.css";


const ImageGalleryItem = ({response}) => {
    
    return (
        <>
            {response.map(elem => {
                return <li className={styles.gallery__card} key={elem.id}>
                    <a className={styles.gallery__link} href={elem.big}>
                        <img className={styles.gallery__img} src={elem.small} alt={elem.id} />
                    </a>
                    
                </li>
                })
            }    
        </>
    );


};

export default ImageGalleryItem;