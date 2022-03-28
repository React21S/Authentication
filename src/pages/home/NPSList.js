import styles from "./Home.module.css";
import useFirestore from "../../hooks/useFirestore";

import React from 'react';

const NPSList = ({NPScores}) => {
    const {deleteDocument}= useFirestore('NPS')

    // // To see response on console 
    // const {deleteDocument, response}= useFirestore('NPS')
    // console.log(response)
    return (
        <ul className={styles.NPSList}>
        {NPScores.map((NPScore) => (
          <li key={NPScore.id}>
            <p className={styles.name}> Name: {NPScore.name}</p>
            <p className={styles.amount}> Quantity: {NPScore.quantity}</p>
            <p className={styles.amount}>€ {NPScore.amount}</p>
            <button onClick={()=>deleteDocument(NPScore.id)}>X</button>
          </li>
        ))}
      </ul>
    );
};

export default NPSList;