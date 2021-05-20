import axios from "axios";
import PropTypes from "prop-types";
import Heading from "../components/typography/Heading";
import EstablishmentList from '../components/establishments/EstablishmentList';
import { BASE_URL } from "../constants/api";

export default function Establishments({ results }) {
    console.log(results);

    return (
        <section>
            <Heading size="1" title="Establishments"/>
            <EstablishmentList results={ results }/>
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