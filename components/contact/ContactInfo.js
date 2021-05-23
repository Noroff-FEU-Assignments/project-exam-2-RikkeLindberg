import { BiEnvelope, BiPhone, BiMap } from 'react-icons/bi'
import Link from 'next/link'
import styles from './ContactInfo.module.css'

export default function ContactInfo() {
    return (
        <div className={styles.container}>
            <Link href="tel:47001100">
                <a>
                    <BiPhone className={styles.icon} />
                </a>
            </Link>
            <Link href="mailto:example@mail.com">
                <a>
                    <BiEnvelope className={styles.icon} />
                </a>
            </Link>
            <Link href="https://goo.gl/maps/TsNsTERbUb976YxN6">
                <a target="_blank">
                    <BiMap className={styles.icon} />
                </a>
            </Link>  
        </div>
    )
}
