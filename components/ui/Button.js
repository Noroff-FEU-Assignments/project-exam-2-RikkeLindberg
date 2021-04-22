import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './Button.module.css';

export default function Button({ link, children }) {
    return (
        <button className={styles.button}>
            <Link href={ link }>
                <a>
                    { children }
                </a>
            </Link>
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};