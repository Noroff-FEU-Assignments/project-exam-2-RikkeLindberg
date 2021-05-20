import PropTypes from 'prop-types'
import styles from './FormButton.module.css'

export default function FormButton({ type, children }) {
    return (
        <button type={type} className={styles.button}>
                { children }
        </button>
    )
}

FormButton.propTypes = {
    children: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};