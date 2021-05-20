import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link'
import Heading from '../../components/typography/Heading'
import { BASE_URL } from '../../constants/api'

export default function Result({ result }) {
    console.log(result);
    return (
        <section>
            <div>
                <Heading size="2" title={ result.name } />
                <Image src={ result.image.formats.small.url } width="300" height="300" alt={ result.name } />
                <div>{result.description}</div>
                <div>{result.price}</div>
                <div>{result.type}</div>
            </div>
            <Link href={`/enquiry/${result.slug}`}>enquiry</Link>
        </section>
    );
}

export async function getStaticPaths() {
    try {
        const response = await axios.get(BASE_URL + "establishments");

        const results = response.data;

        const paths = results.map((result) => ({
                params: { id: result.id.toString() },
        }));

        console.log(paths);

        return { 
            paths, 
            fallback: false 
        };
    } catch (error){
        console.log(error);
    }
}

export async function getStaticProps({ params }) {
    const url = `${BASE_URL + "establishments"}/${params.id}`;

    let result = null;

    try {
        const response = await axios.get(url);
        result = response.data;
    } catch (error) {
        console.log(error);
    }

    return {
        props: { result: result },
    };
}