import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import styles from './Cardboard.module.scss';

function Cardboard({cards}) {
  return (
    <section className={styles.root}>
      {cards.map((card) => (
        card && <Card key={card.id} {...card}/>
      ))}
    </section>
  );
}

Cardboard.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default Cardboard;
