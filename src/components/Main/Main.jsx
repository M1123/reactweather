import React from 'react';
import styles from './Main.module.css'
import Search from "./Search/Search";

const Main = (props) => {
    return <main className={styles.Main}>
        <Search getWeather={props}/>
        <div className={styles.Wrapper}>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
        </div>
    </main>
}

export default Main;