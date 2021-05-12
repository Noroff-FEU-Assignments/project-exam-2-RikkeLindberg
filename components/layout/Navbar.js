import { useState } from 'react';
import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import AuthContext from "../../context/AuthContext";
import styles from './Navbar.module.css';

export default function Navbar() {

    const [toggled, setToggled] = useState(false);
    const handleToggle = () => {
       setToggled(!toggled); 
    }

    const [auth, setAuth] = useContext(AuthContext);

    const router = useRouter();

    function logout() {
        setAuth(null);
        router.push("/login");
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
                        <Link href="/establishments">
                            <a className={styles.link}>Establishments</a>
                        </Link>
                    </li>
                    <li className={styles.item} onClick={() => handleToggle()}>
                        <Link href="/contact">
                            <a className={styles.link}>Contact</a>
                        </Link>
                    </li>

                    { auth ? (
                        <li className={styles.item} onClick={() => handleToggle()}>
                            <Link href="/admin">
                                <a className={styles.link}>Admin</a>
                            </Link>
                            <button onClick={logout}>Log out</button>
                        </li> 
                    ) : (   <li className={styles.item} onClick={() => handleToggle()}>
                                <Link href="/login">
                                    <a className={styles.btn}>Login</a>
                                </Link>
                            </li> ) 
                    } 
                </ul>

                <button className={toggled === false ? styles.toggle : `${styles.toggle} ${styles.active}`} onClick={() => handleToggle()}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
            </nav>
    )
}
