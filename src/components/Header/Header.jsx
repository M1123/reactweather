import React from 'react';
import styles from './Header.module.css';
import Nav from "./Nav/Nav";


const Header = () =>{
    return(
        <header className={styles.Header}>
            <div className={`${styles.item} ${styles.logo}`}>WeWo°</div>
            <Nav/>
            <div className={styles.item}>World time</div>
        </header>
    )
}

export default Header;
