import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {

    const [toggled, setToggled] = useState(false);
    const handleToggle = () => {
       setToggled(!toggled); 
    } 

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/"><a className={styles.navlogo}>Holidaze</a></Link>

                <ul className={toggled === false ? styles.nav_list : `${styles.nav_list} ${styles.active}`}>
                    <li className={styles.nav_item} onClick={() => handleToggle()}>
                        <Link href="/">
                            <a className={styles.nav_link}>Home</a>
                        </Link>
                    </li>
                    <li className={styles.nav_item} onClick={() => handleToggle()}>
                        <Link href="/hotels">
                            <a className={styles.nav_link}>Hotels</a>
                        </Link>
                    </li>
                    <li className={styles.nav_item} onClick={() => handleToggle()}>
                        <Link href="/contact">
                            <a className={styles.nav_link}>Contact</a>
                        </Link>
                    </li>
                    <li className={styles.nav_item} onClick={() => handleToggle()}>
                        <Link href="/login">
                            <a className={styles.nav_btn}>Login</a>
                        </Link>
                    </li>
                </ul>

                <button className={toggled === false ? styles.toggle : `${styles.toggle} ${styles.active}`} onClick={() => handleToggle()}>
                    <span className={styles.toggle_bar}></span>
                    <span className={styles.toggle_bar}></span>
                    <span className={styles.toggle_bar}></span>
                </button>

                <Link href="/login"><a className={styles.nav_btn}>Login</a></Link>
            </nav>
        </header>
    )
}
