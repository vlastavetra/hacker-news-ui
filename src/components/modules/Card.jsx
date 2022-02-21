import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from './Card.module.scss';

function Card({id, title}) {
  return (
    <Link className={styles.root} to={`/${id}`}>
      <article className={styles.article}>
        <h3>{title}</h3>
      </article>
    </Link>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
