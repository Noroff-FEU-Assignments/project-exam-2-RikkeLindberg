import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <Link href="/"><a className={styles.logo}>Holidaze</a></Link>

                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link href="/">
                            <a className={styles.link}>Home</a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/establishments">
                            <a className={styles.link}>Hotels</a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/contact">
                            <a className={styles.link}>Contact</a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/login">
                            <a className={styles.link}>Login</a>
                        </Link>
                    </li>
                </ul>

                <div className={styles.icons}>
                    <Link href="https://www.instagram.com/">
                        <a className={styles.icon_link} target="_blank">
                            <FaInstagram className={styles.icon} />
                        </a>
                    </Link>
                    <Link href="https://www.facebook.com/">
                        <a className={styles.icon_link} target="_blank">
                            <FaFacebookF className={styles.icon} />
                        </a>
                    </Link>
                    <Link href="https://twitter.com/">
                        <a className={styles.icon_link} target="_blank">
                            <FaTwitter className={styles.icon} />
                        </a>
                    </Link>
                </div>

                <small className={styles.copyright}>© 2021 Holidaze, Rikke Lindberg - Project Exam 2</small>
            </div>
        </footer>
    )
}