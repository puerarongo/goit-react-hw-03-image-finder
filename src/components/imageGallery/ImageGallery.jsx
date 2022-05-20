import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ children }) => {
  return <ul className={styles.gallery}>{children}</ul>;
};

ImageGallery.propTypes = {
  children: PropTypes.element,
};

export default ImageGallery;
