import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {loadNews} from '../../store/api-actions';
import styles from './Main.module.scss';

function Main(props) {
  const {news, loadData, isDataLoaded} = props;

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <h1>Hacker news</h1>
      </header>
      <main className={styles.main}>
        <h2>Last news</h2>
        {isDataLoaded &&
          news.map((article) => (
            <article key={article.id}>
              <Link className={styles.link} to={`/${article.id}`}>
                <h3>{article.title}</h3>
              </Link>
            </article>
          ))}
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
