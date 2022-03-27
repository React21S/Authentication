import styles from "./Home.module.css";
import SurveyOutcome from "./SurveyOutcome";
import React from 'react';
import useAuthContext from "../../hooks/useAuthContext";

const Home = () => {
    // for individual user
    const {user}=useAuthContext()
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                Information about Net promoter score
            </div>
            <div className={styles.sidebar}>
                <SurveyOutcome uid={user.uid}/>
            </div>
        </div>
    );
};

export default Home;