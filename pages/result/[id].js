import axios from 'axios';
import { BiPurchaseTag, BiUser } from 'react-icons/bi';
import Image from 'next/image'
import Button from '../../components/ui/Button';
import Heading from '../../components/typography/Heading'
import { BASE_URL } from '../../constants/api'
import styles from './result.module.css'

export default function Result({ result }) {
    console.log(result);
    return (
        <section className={styles.container}>
            <div className={styles.grid}>
                <Heading size="3" title={ result.name } />

                <div className={styles.image}>
                    <Image src={ result.image.formats.small.url } width="500" height="400" alt={ result.name } />
                </div>
                    <p><span>{result.address}</span></p>

                    <p>{result.description}</p>

                    <div className={styles.paragraphs}>
                        <p>
                            <BiUser className={styles.icon} />
                            <span>Max guests: </span> 
                            {result.max_guests}
                        </p>
                        <p>
                            <BiPurchaseTag className={styles.icon} />
                            <span>Per night: </span>
                            {result.price} NOK
                        </p>
                    </div>

                    <Button link={`/enquiry/${result.slug}`}>
                        Book today
                    </Button>
            </div>
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