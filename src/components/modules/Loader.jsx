import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loader.module.scss';

function Loader({text}) {
  return (
    <span className={styles.root}>Loading {text} ...</span>
  );
}

Loader.propTypes = {
  text: PropTypes.string,
};

export default Loader;
