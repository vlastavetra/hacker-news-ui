import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

function Button({text, handleClick}) {
  return (
    <button
      className={styles.root}
      onClick={handleClick}
    >{text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
