import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../elements/Icon';
import styles from './Comment.module.scss';

function Comment(props) {
  const {text, by, time, kids} = props;
  const date = new Date(time * 1000);

  return (
    <li className={styles.root}>
      <div className={styles.author}>
        <Icon className={styles.userIcon} type='user'/>
        <span className={styles.username}>{by}</span>
      </div>
      <time className={styles.date} dateTime={date}>
        {date.toLocaleString()}
      </time>
      <div dangerouslySetInnerHTML={{__html: text}}/>
      {kids && <button className={styles.button}><Icon className={styles.userIcon} type='comment'/></button>}
    </li>
  );
}

Comment.propTypes = {
  text: PropTypes.string,
  time: PropTypes.number.isRequired,
  by: PropTypes.string,
  kids: PropTypes.array,
};

export default Comment;
