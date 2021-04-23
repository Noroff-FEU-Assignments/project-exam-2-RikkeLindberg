import Hero from './Hero';
import Searchbar from '../forms/Searchbar';
import styles from './Banner.module.css';

export default function Banner() {
    return (
        <div id="home" className={styles.section}>
                    <Searchbar type="text" text="search" className={styles.searchbar} />
                    <Hero className={styles.hero} />
        </div>
    )
}