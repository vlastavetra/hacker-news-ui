import React, {useEffect} from 'react';
import {isEmpty} from 'lodash';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadNews} from '../../store/api-actions';
import {ActionCreator} from '../../store/action';
import Cardboard from '../modules/Cardboard';
import Loader from '../modules/Loader';
import Button from '../modules/Button';
import styles from './MainPage.module.scss';

const sortByDate = (a, b) => {
  if (a.time < b.time) {
    return 1;
  }
  if (a.time > b.time) {
    return -1;
  }
  return 0;
};

function MainPage({news, article, loadData, isNewsLoaded, resetArticle}) {
  const cards = news.filter((item) => item !== null).sort(sortByDate);

  useEffect(() => {
    isEmpty(news) && loadData();
    isEmpty(!article) && resetArticle();

    const interval = setInterval(() => {
      loadData();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <h1 className={styles.title}>Hacker news</h1>
        <Button
          text='Update'
          handleClick={() => loadData()}
        />
      </header>
      <main className={styles.main}>
        {isNewsLoaded ? <Cardboard cards={cards}/> : <Loader text='articles'/>}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

MainPage.propTypes = {
  news: PropTypes.array,
  loadData: PropTypes.func,
  isNewsLoaded: PropTypes.bool,
  article: PropTypes.object,
  resetArticle: PropTypes.func,
};

const mapStateToProps = ({news, isNewsLoaded}) => ({
  news,
  isNewsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  loadData() {
    dispatch(loadNews());
  },
  resetArticle() {
    dispatch(ActionCreator.resetArticle());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
