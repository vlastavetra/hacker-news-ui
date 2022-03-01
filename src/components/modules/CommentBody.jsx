import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../elements/Icon';
import styles from './CommentBody.module.scss';

function CommentBody(props) {
  const {text, by, time} = props;
  const date = new Date(time * 1000);

  return (
    <div className={styles.root}>
      <div className={styles.author}>
        <Icon className={styles.userIcon} type='user'/>
        <span className={styles.username}>{by}</span>
      </div>
      <time className={styles.date} dateTime={date}>
        {date.toLocaleString()}
      </time>
      <div dangerouslySetInnerHTML={{__html: text}}/>
    </div>
  );
}

CommentBody.propTypes = {
  text: PropTypes.string,
  time: PropTypes.number.isRequired,
  by: PropTypes.string,
};

export default CommentBody;
