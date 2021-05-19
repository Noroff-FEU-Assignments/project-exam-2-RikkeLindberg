import styles from './Searchbar.module.css';

export default function Searchbar() {

    return (
        <form className={styles.form}>
            <input 
                type="text"
                placeholder="search.."
                className={styles.input}
            />
        </form>
    );
}
