import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../elements/Icon';
import styles from './Article.module.scss';

function Article(props) {
  const {title, by, time, url} = props;
  const date = new Date(time * 1000);

  return (
    <article className={styles.root}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.author}>
        <Icon className={styles.userIcon} type='user'/>
        <span className={styles.username}>{by}</span>
      </div>
      <time className={styles.date} dateTime={date}>
        {date.toLocaleString()}
      </time>
      {url &&
        <a
          href={url}
          className={styles.link}
          rel='noopener noreferrer'
          target='_blank'
        >Source
        </a>}
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
