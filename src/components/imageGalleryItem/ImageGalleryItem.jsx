import React from "react";
import styles from "./ImageGalleryItem.module.css";


const ImageGalleryItem = ({response, modal}) => {
    
    return (
        <>
            {response.map(elem => {
                return <li className={styles.gallery__card} key={elem.id} onClick={() => modal(elem.id)}>
                    <img className={styles.gallery__img} src={elem.small} alt={elem.id} />
                </li>
                })
            }    
        </>
    );


};

export default ImageGalleryItem;