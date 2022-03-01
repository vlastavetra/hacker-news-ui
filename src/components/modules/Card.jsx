import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Icon from '../elements/Icon';
import styles from './Card.module.scss';

function Card({id, title, score, by, time, descendants}) {
  const date = new Date(time * 1000);

  return (
    <Link className={styles.root} to={`/${id}`}>
      <article className={styles.article}>
        <div className={styles.author}>
          <Icon className={styles.userIcon} type='user'/>
          <span className={styles.username}>{by}</span>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <time className={styles.date} dateTime={date}>
          {date.toLocaleString()}
        </time>
        <div className={styles.counters}>
          <div className={styles.rating}>
            <Icon className={styles.starIcon} type='star'/>
            <span className={styles.score}>{score}</span>
          </div>
          {descendants ?
            <div className={styles.comments}>
              <Icon className={styles.starIcon} type='comment'/>
              <span className={styles.score}>{descendants}</span>
            </div> : null}
        </div>
      </article>
    </Link>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  score: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  by: PropTypes.string.isRequired,
  descendants: PropTypes.number,
};

export default Card;
