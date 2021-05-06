import { useState } from 'react';
import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import AuthorisationContext from "../../context/AuthorisationContext";
import styles from './Navbar.module.css';

export default function Navbar() {

    const [toggled, setToggled] = useState(false);
    const handleToggle = () => {
       setToggled(!toggled); 
    }

    const [auth, setAuth] = useContext(AuthorisationContext);

    const router = useRouter();

    function logout() {
        setAuth(null);
        router.push("/");
    }

    return (
            <nav className={styles.nav}>
                <Link href="/"><a className={styles.logo}>Holidaze</a></Link>

                <ul className={toggled === false ? styles.list : `${styles.list} ${styles.active}`}>
                    <li className={styles.item} onClick={() => handleToggle()}>
                        <Link href="/">
                            <a className={styles.link}>Home</a>
                        </Link>
                    </li>
                    <li className={styles.item} onClick={() => handleToggle()}>
                        <Link href="/hotels">
                            <a className={styles.link}>Hotels</a>
                        </Link>
                    </li>
                    <li className={styles.item} onClick={() => handleToggle()}>
                        <Link href="/contact">
                            <a className={styles.link}>Contact</a>
                        </Link>
                    </li>
                    { auth ? (
                    <>
                        <li className={styles.item} onClick={() => handleToggle()}>
                            <Link href="/admin"><a className={styles.btn}>Admin</a></Link>
                        </li> 
                        <button onClick={logout}>Log out</button>
                    </> 
                    ) : (<li className={styles.item} onClick={() => handleToggle()}>
                            <Link href="/login"><a className={styles.btn}>Login</a></Link>
                        </li>) 
                    } 
                </ul>

                <button className={toggled === false ? styles.toggle : `${styles.toggle} ${styles.active}`} onClick={() => handleToggle()}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>

                <Link href="/login"><a className={styles.btn}>Login</a></Link>
            </nav>
    )
}
