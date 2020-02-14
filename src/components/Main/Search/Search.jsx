import React from 'react';
import styles from './Search.module.css'

const Search = (props) => {
    return <form onSubmit={props.getWeather} className={styles.Search}>
        <input type="text" placeholder="Город" name="city" className={`${styles.item} ${styles.input}`}/>
        <select name="Страна" placeholder="Страна" className={styles.item}>
            <option>ru</option>
            <option>en</option>
        </select>
        <button className={`${styles.item} ${styles.button}`}>Search</button>
    </form>
}

export default Search;