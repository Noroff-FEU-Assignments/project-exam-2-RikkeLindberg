import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Link href="/"><a className={styles.logo}>Holidaze</a></Link>

            <ul className={styles.list}>
                <li>
                    <Link href="/">
                        <a className={styles.link}>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/hotels">
                        <a className={styles.link}>Hotels</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a className={styles.link}>Contact</a>
                    </Link>
                </li>
                <li>
                    <Link href="/login">
                        <a className={styles.link}>Login</a>
                    </Link>
                </li>
            </ul>

            <small className={styles.copyright}>© 2021 Holidaze, Rikke Lindberg - Project Exam 2</small>
        </footer>
    )
}