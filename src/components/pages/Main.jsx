import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadNews} from '../../store/api-actions';
import Cardboard from '../modules/Cardboard';
import styles from './Main.module.scss';

function Main({news, loadData, isDataLoaded}) {

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <h1 className={styles.title}>Hacker news</h1>
      </header>
      <main className={styles.main}>
        {isDataLoaded && <Cardboard cards={news}/>}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

Main.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
