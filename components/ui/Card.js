import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Card.module.css'

export default function Card({ src, alt, title, content, link, text }) {
    return (
        <div className={styles.card}>
            <Image className={styles.img} src={ src } width="400" height="300" alt={alt} />
            <h4 className={styles.heading}>{ title }</h4>
            <p className={styles.paragraph}>{ content }</p>
            <Link href={ link }><a className={styles.btn}  target="_blank">{ text }</a></Link>
        </div>
    )
}

Card.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
