import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../elements/Icon';
import styles from './Article.module.scss';

function Article({title, by, time, url}) {
  const date = new Date(time * 1000);

  return (
    <article className={styles.root}>
      <h2>{title}</h2>
      <div className={styles.author}>
        <Icon className={styles.userIcon} type='user'/>
        <span className={styles.username}>{by}</span>
      </div>
      <time className={styles.date} dateTime={date}>
        {date.toLocaleString()}
      </time>
      <a
        href={url}
        className={styles.link}
        rel='noopener noreferrer'
        target='_blank'
      >
        Source
      </a>
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  time: PropTypes.number.isRequired,
  by: PropTypes.string.isRequired,
};

export default Article;
