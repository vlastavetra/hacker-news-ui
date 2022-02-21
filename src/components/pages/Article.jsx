import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadArticle} from '../../store/api-actions';
import {ActionCreator} from '../../store/action';
import styles from './Article.module.scss';

function Article(props) {
  const {article, loadData, isDataLoaded, createData, location, news} = props;
  const path = location.pathname;
  const id = Number(path.replace(/\//,''));
  const loadedArticle = news.find((item) => item.id === id);

  useEffect(() => {
    if (loadedArticle) {
      createData(loadedArticle);
    } else {loadData(id);}
  }, []);

  return (
    <div className={styles.root}>
      <header className={styles.header}></header>
      <main className={styles.main}>
        {isDataLoaded && <h1>{article.title}</h1>}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

Article.propTypes = {
  news: PropTypes.array,
  article: PropTypes.object,
  loadData: PropTypes.func,
  isDataLoaded: PropTypes.bool,
  createData:  PropTypes.func,
  location: PropTypes.object,
};

const mapStateToProps = ({news, article, isDataLoaded}) => ({
  news,
  article,
  isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  createData(obj) {
    dispatch(ActionCreator.createArticle(obj));
  },
  loadData(id) {
    dispatch(loadArticle(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);
