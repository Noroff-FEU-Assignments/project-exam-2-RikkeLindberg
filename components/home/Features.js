import { RiHotelFill, RiHome2Fill, RiHotelBedFill } from 'react-icons/Ri';
import Heading from '../typography/Heading';
import styles from './Features.module.css';

export default function Features() {
    return (
        <section className={styles.features}>
            <Heading size="2" title="What we can offer you" />
            <div className={styles.grid}>
                <div className={styles.card}>
                    <RiHotelFill />
                    <Heading size="4" title="Hotels" />
                </div>
                <div className={styles.card}>
                    <RiHome2Fill />
                    <Heading size="4" title="Guesthouses" />
                </div>
                <div className={styles.card}>
                    <RiHotelBedFill />
                    <Heading size="4" title="B&#38;Bs" />
                </div>
            </div>
        </section>
    )
}
