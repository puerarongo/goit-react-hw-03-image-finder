import React from 'react';
import styles from './Loader.module.css';
import { Triangle } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={styles.container}>
      <Triangle color="rgb(199, 8, 8)" height={100} width={100} />
    </div>
  );
};

export default Loader;
