import { BiHomeAlt, BiUser, BiBuildingHouse, BiEnvelope } from 'react-icons/bi';
import { useContext } from 'react'
import Link from 'next/link'
import AuthContext from '../../context/AuthContext'
import styles from './Navbar.module.css'

export default function Navbar() {
    const [auth] = useContext(AuthContext);

    return (
        <>
            <Link href="/">
                <a className={styles.logo}>Holidaze</a>
            </Link>
            
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link href="/">
                            <a className={styles.link}>
                                <BiHomeAlt className={styles.icon} /> Home
                            </a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/establishments">
                            <a className={styles.link}>
                                <BiBuildingHouse className={styles.icon} /> Hotels
                            </a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/contact">
                            <a className={styles.link}>
                                <BiEnvelope className={styles.icon} /> Contact
                            </a>
                        </Link>
                    </li>

                    { auth ? (
                        <li className={styles.item}>
                            <Link href="/admin">
                                <a className={styles.link}>
                                    <BiUser className={styles.icon} /> Admin
                                </a>
                            </Link>
                        </li> 
                    ) : (
                        <li className={styles.item}>
                            <Link href="/login">
                                <a className={styles.link}>
                                    <BiUser className={styles.icon} /> Login
                                </a>
                            </Link>
                        </li> ) 
                    } 
                </ul>
            </nav>
        </>
    )
}
