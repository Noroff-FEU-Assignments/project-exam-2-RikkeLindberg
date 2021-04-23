import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

export default function Searchbar({ type, text }) {
    return (
        <form className={styles.form}>
            <input
                type={ type }
                placeholder={ text }
                className={styles.input}
            />
        </form>
    )
}

Searchbar.propTypes = {
	type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};