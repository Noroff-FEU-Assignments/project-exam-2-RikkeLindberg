import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'

function EstablishmentList({ results }) {
    return (
        <div>
            {results.map((result) => {
				return ( 
                    <div key={ result.id }>
                        <Link href={ `/result/${result.id}` }>
                            <a>
                                <Image src={ result.image.formats.small.url } width="300" height="300" alt={ result.name } />
                                <div>
                                    <h3>{ result.name }</h3>
                                    <div>{ result.address }</div>
                                    <div>{ result.price }</div>
                                </div>
                            </a>
                        </Link>
                    </div>
                );
			})}
        </div>
    );
}

EstablishmentList.propTypes = {
    results: PropTypes.arrayOf(PropTypes.object),
};

export default EstablishmentList;