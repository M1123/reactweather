import React from 'react';
import styles from './Item.module.css'

const Item = (props) => {
    return <a className={styles.item} href={props.href}>{props.text}</a>
}

export default Item;