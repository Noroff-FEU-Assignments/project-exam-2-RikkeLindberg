import Hero from './Hero';
import Searchbar from '../forms/Searchbar';
import styles from './Banner.module.css';

export default function Banner() {
    return (
        <section id="home" className={styles.section}>
                <div className={styles.grid}>
                    <Searchbar type="text" text="search" className={styles.searchbar} />
                    <Hero className={styles.hero} />
                </div>
        </section>
    )
}