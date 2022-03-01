import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Icon from '../elements/Icon';
import {loadArticle, loadCommentsTree} from '../../store/api-actions';
import {ActionCreator} from '../../store/action';
import Article from '../modules/Article';
import Comments from '../modules/Comments';
import styles from './ArticlePage.module.scss';

function ArticlePage(props) {
  const {article, loadData, isArticleLoaded, createData, location, news, getCommentsTree, commentsTree} = props;
  const path = location.pathname;
  const id = Number(path.replace(/\//,''));
  const loadedArticle = news.find((item) => item.id === id);
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  useEffect(() => {
    if (loadedArticle) {
      createData(loadedArticle);
    } else {loadData(id);}
  }, []);

  useEffect(() => {
    isArticleLoaded && article.kids && getCommentsTree();
  }, [isArticleLoaded]);

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <button className={styles.backButton} onClick={() => handleClick()}>
          <Icon className={styles.backIcon} type='arrow'/>
        </button>
      </header>
      <main className={styles.main}>
        {isArticleLoaded ?
          <Article {...article}/> :
          <p className={styles.loader}>Loading article ...</p>}
        {article.kids && <Comments comments={commentsTree} articleId={id}/>}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

ArticlePage.propTypes = {
  news: PropTypes.array,
  article: PropTypes.object,
  commentsTree: PropTypes.array,
  loadData: PropTypes.func,
  getCommentsTree: PropTypes.func,
  isArticleLoaded: PropTypes.bool,
  createData:  PropTypes.func,
  location: PropTypes.object,
};

const mapStateToProps = ({news, article, commentsTree, isArticleLoaded}) => ({
  news,
  article,
  commentsTree,
  isArticleLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  createData(obj) {
    dispatch(ActionCreator.createArticle(obj));
  },
  loadData(id) {
    dispatch(loadArticle(id));
  },
  getCommentsTree() {
    dispatch(loadCommentsTree());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
