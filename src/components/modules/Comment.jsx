import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadSubComments} from '../../store/api-actions';
import Icon from '../elements/Icon';
import CommentBody from './CommentBody';
import styles from './Comment.module.scss';

function Comment(props) {
  const {kids, id, loadData, subComments, isSubCommentsLoad} = props;
  const [shownComments, setShownComments] = useState(false);
  const filtredSubComments = subComments.filter((item) => item.parent === id);

  return (
    <li className={styles.root}>
      <CommentBody {...props}/>
      {kids && !shownComments &&
        <button className={styles.button} onClick={() => {loadData(kids); setShownComments(true);}}>
          <Icon className={styles.userIcon} type='comment'/>
          {kids.length}
        </button>}
      {shownComments && isSubCommentsLoad ?
        <ul className={styles.subComments}>{filtredSubComments.map((comment) => (comment.text && <li key={comment?.id}><CommentBody {...comment}/></li>))}</ul> :
        null}
    </li>
  );
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  kids: PropTypes.array,
  loadData: PropTypes.func,
  subComments: PropTypes.array,
  isSubCommentsLoad: PropTypes.bool,
};

const mapStateToProps = ({subComments, isSubCommentsLoad}) => ({
  subComments,
  isSubCommentsLoad,
});

const mapDispatchToProps = (dispatch) => ({
  loadData(ids) {
    dispatch(loadSubComments(ids));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
