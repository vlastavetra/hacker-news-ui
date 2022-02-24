import React, {useEffect} from 'react';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {loadNews} from '../../store/api-actions';
import Cardboard from '../modules/Cardboard';
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

function MainPage({news, loadData, isDataLoaded}) {
  const cards = news.filter((item) => item !== null).sort(sortByDate);

  useEffect(() => {
    isEmpty(news) && loadData();

    const interval = setInterval(() => {
      loadData();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <Link to={'/'}>
          <h1 className={styles.title}>Hacker news</h1>
        </Link>
        <button
          className={styles.button}
          onClick={() => loadData()}
        >Update
        </button>
      </header>
      <main className={styles.main}>
        {isDataLoaded ? <Cardboard cards={cards}/> : <p className={styles.loader}>Loading articles ...</p>}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

MainPage.propTypes = {
  news: PropTypes.array,
  loadData: PropTypes.func,
  isDataLoaded: PropTypes.bool,
};

const mapStateToProps = ({news, isDataLoaded}) => ({
  news,
  isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  loadData() {
    dispatch(loadNews());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
