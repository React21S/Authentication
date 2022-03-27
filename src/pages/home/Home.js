import styles from "./Home.module.css";
import SurveyOutcome from "./SurveyOutcome";
import React from 'react';
import useAuthContext from "../../hooks/useAuthContext";
import useCollection from "../../hooks/useCollection";
import NPSList from "./NPSList";

const Home = () => {
    // for individual user
    const {user}=useAuthContext()
    const {documents, error}=useCollection('NPS')
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                Information about Net promoter score
                {error && <p>{error}</p>}
                {/* To get the list of the NPS inserted */}
                {documents && <NPSList NPScores={documents} />}
            </div>
            <div className={styles.sidebar}>
                <SurveyOutcome uid={user.uid}/>
            </div>
        </div>
    );
};

export default Home;