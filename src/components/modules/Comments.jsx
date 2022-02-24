import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadArticle, loadCommentsTree} from '../../store/api-actions';
import Comment from './Comment';
import styles from './Comments.module.scss';

function Comments(props) {
  const {comments, articleId, loadData, getCommentsTree, isCommentsTreeLoad} = props;

  const updateComments = () => {
    loadData(articleId);
    getCommentsTree();
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
        <button
          className={styles.button}
          onClick={() => (updateComments())}
        >Update
        </button>
      </div>
      {isCommentsTreeLoad && <ul>{comments.map((comment) => (<Comment key={comment?.id} {...comment}/>))}</ul>}
    </section>
  );
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  articleId: PropTypes.number,
  loadData: PropTypes.func,
  getCommentsTree: PropTypes.func,
  isCommentsTreeLoad: PropTypes.bool,
};

const mapStateToProps = ({article, commentsTree, isCommentsTreeLoad}) => ({
  article,
  commentsTree,
  isCommentsTreeLoad,
});

const mapDispatchToProps = (dispatch) => ({
  loadData(id) {
    dispatch(loadArticle(id));
  },
  getCommentsTree() {
    dispatch(loadCommentsTree());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
