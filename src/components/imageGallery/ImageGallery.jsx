import React from 'react';
import ImageGalleryItem from 'components/imageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ response, modal }) => {
  return (
    <ul className={styles.gallery}>
      {response.map(({ id, small }) => {
        return <ImageGalleryItem key={id} id={id} img={small} modal={modal} />;
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  response: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      small: PropTypes.string.isRequired,
    })
  ).isRequired,
  modal: PropTypes.func.isRequired,
};

export default ImageGallery;
