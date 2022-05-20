import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ response, modal }) => {
  return (
    <>
      {response.map(({ id, small }) => {
        return (
          <li
            className={styles.gallery__card}
            key={id}
            onClick={() => modal(id)}
          >
            <img className={styles.gallery__img} src={small} alt={id} />
          </li>
        );
      })}
    </>
  );
};

ImageGalleryItem.propTypes = {
  response: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      small: PropTypes.string.isRequired,
    })
  ).isRequired,
  modal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
