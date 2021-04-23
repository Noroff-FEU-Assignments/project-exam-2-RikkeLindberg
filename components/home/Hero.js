import Button from '../ui/Button';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <div className={styles.hero}>
            <Heading size="1" title="Tourism Agency in Bergen"/>
            <Paragraph content="Visit Bergen and find the way you want to live on vacation either it is in a hotel, B&B or a guesthouse we got you covered."/>
            <Button link="/hotels">See all hotels</Button>
        </div>
    )
}