import styles from "./Home.module.css";
import SurveyOutcome from "./SurveyOutcome";
import React from 'react';
import useAuthContext from "../../hooks/useAuthContext";
import useCollection from "../../hooks/useCollection";

//To fecth data 
import NPSList from "./NPSList";

const Home = () => {
    // for individual user
    const {user}=useAuthContext()
    const {documents, error}=useCollection(
        // for handle the fetching from useCollection 
        'NPS',
        // For handle separate users by query the user from useCollection
        ["uid", "==", user.uid],
        // null,

        // For handle orderBy method either ascending or descending order
        ["createdAt", "desc"]
    
    )
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                Information about Net promoter score
                {error && <p>{error}</p>}
                {/* To get the list of the NPS inserted from database*/}
                {documents && <NPSList NPScores={documents} />}
            </div>
            <div className={styles.sidebar}>
                <SurveyOutcome uid={user.uid}/>
            </div>
        </div>
    );
};

export default Home;