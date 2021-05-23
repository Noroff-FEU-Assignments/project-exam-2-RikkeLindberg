import { BiPurchaseTag } from 'react-icons/bi';
import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'
import Heading from '../typography/Heading'
import styles from './EstablishmentList.module.css'

function EstablishmentList({ results }) {
    return (
        <>
            {results.map((result) => {
				return ( 
                    <div key={ result.id } className={styles.card}>
                        <Link href={ `/result/${result.id}` }>
                            <a className={styles.link}>
                                <Image src={ result.image.formats.small.url } 
                                        width="400" 
                                        height="300" 
                                        alt={ result.name }
                                        className={styles.img} 
                                    />
                                    <Heading size="4" title={ result.name }/>
                                    <p className={styles.paragraph}> 
                                        { result.address }
                                    </p>
                                    <p className={styles.paragraph}>
                                        <BiPurchaseTag className={styles.icon} /> 
                                        <span>Per night:</span> { result.price },-
                                    </p>
                            </a>
                        </Link>
                    </div>
                );
			})}
        </>
    );
}

EstablishmentList.propTypes = {
    results: PropTypes.arrayOf(PropTypes.object),
};

export default EstablishmentList;