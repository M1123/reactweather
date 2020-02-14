import React from 'react';
import styles from './Nav.module.css';
import Item from "./Item/Item";

const Nav = () => {
    return <nav className={styles.nav}>
        <Item text = 'Today' href='#'></Item>
        <Item text = 'Tomorrow' href='#'></Item>
        <Item text = '3 Days' href='#'></Item>
        <Item text = '7 Days' href='#'></Item>
        <Item text = '2 Weeks' href='#'></Item>
    </nav>
}
export default Nav;