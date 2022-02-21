import React from 'react';
import styles from './Error.module.scss';

function Error() {
  return (
    <div className={styles.root}>
      <header className={styles.header}></header>
      <main className={styles.main}></main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

export default Error;
