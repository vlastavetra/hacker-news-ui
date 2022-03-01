import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadArticle, loadComments} from '../../store/api-actions';
import Comment from './Comment';
import Button from './Button';
import Loader from './Loader';
import styles from './Comments.module.scss';

function Comments(props) {
  const {comments, articleId, loadData, getComments, isCommentsLoad} = props;

  const updateComments = () => {
    loadData(articleId);
    getComments();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateComments();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.root}>
      <div className={styles.title}>
        <span>Comments</span>
        <Button
          text='Update'
          handleClick={() => updateComments()}
        />
      </div>
      {isCommentsLoad ?
        <ul>{comments.map((comment) => (comment.text && <Comment key={comment?.id} {...comment}/>))}</ul> :
        <Loader text='comments'/>}
    </section>
  );
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  articleId: PropTypes.number,
  loadData: PropTypes.func,
  getComments: PropTypes.func,
  isCommentsLoad: PropTypes.bool,
};

const mapStateToProps = ({article, comments, isCommentsLoad}) => ({
  article,
  comments,
  isCommentsLoad,
});

const mapDispatchToProps = (dispatch) => ({
  loadData(id) {
    dispatch(loadArticle(id));
  },
  getComments() {
    dispatch(loadComments());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
