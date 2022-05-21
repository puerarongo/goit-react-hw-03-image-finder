import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, img, modal }) => {
  return (
    <>
      <li className={styles.gallery__card} key={id} onClick={() => modal(id)}>
        <img className={styles.gallery__img} src={img} alt={id} />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  modal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
