import axios from 'axios'
import PropTypes from 'prop-types'
import EstablishmentList from '../components/establishments/EstablishmentList'
import CardsGrid from '../components/layout/CardsGrid'
import Heading from '../components/typography/Heading'
import { BASE_URL } from '../constants/api'

export default function Establishments({ results }) {
    console.log(results);

    return (
        <section className="heading-center">
            <Heading size="1" title="Establishments" />
            <CardsGrid>
                <EstablishmentList results={ results }/>
            </CardsGrid>
        </section>
    )
}

Establishments.propTypes = {
    results: PropTypes.arrayOf(PropTypes.object),
};

const url = BASE_URL + "establishments";

export async function getStaticProps() {
    let results = [];
  
    try {
      const response = await axios.get(url);
  
      results = response.data;
  
    } catch (error) {
      console.log(error);
    }
  
    return {
        props: {
            results: results,
        },
    };
}