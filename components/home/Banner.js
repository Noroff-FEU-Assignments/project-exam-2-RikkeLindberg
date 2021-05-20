import Hero from './Hero'
import Searchbar from '../forms/Searchbar'
import styles from './Banner.module.css'

export default function Banner() {
    return (
        <div className={styles.section}>
                    <Searchbar />
                    <Hero className={styles.hero} />
        </div>
    )
}