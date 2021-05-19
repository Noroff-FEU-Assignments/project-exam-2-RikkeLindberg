import Hero from './Hero';
import styles from './Banner.module.css';
import Searchbar from '../forms/Searchbar';

export default function Banner() {
    return (
        <div className={styles.section}>
                    <Hero className={styles.hero} />
                    <Searchbar />
        </div>
    )
}