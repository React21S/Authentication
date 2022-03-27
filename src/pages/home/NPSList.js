import styles from "./Home.module.css";

import React from 'react';

const NPSList = ({NPScores}) => {
    return (
        <ul className={styles.NPSList}>
        {NPScores.map((NPScore) => (
          <li key={NPScore.id}>
            <p className={styles.name}>{NPScore.name}</p>
            <p className={styles.amount}>€ {NPScore.amount}</p>
          </li>
        ))}
      </ul>
    );
};

export default NPSList;