import CardsGrid from '../layout/CardsGrid';
import Card from '../ui/Card';
import Heading from '../typography/Heading';

export default function Explore() {
    return (
        <section>
            <Heading size="2" title="Explore bergen" />
            <CardsGrid>
                <>
                    <Card src="/img/natours.JPG" alt="bergen" title="Fløybanen" content="Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis" link="https://www.visitbergen.com/" text="learn more" />
                    <Card src="/img/natours.JPG" alt="bergen" title="Fløven" content="Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore." link="https://www.visitbergen.com/" text="learn more" />
                    <Card src="/img/natours.JPG" alt="bergen" title="Bergen brygge" content="Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna" link="https://www.visitbergen.com/" text="learn more" />
                    <Card src="/img/natours.JPG" alt="bergen" title="Akvarium" content="Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor" link="https://www.visitbergen.com/" text="learn more" />
                </>
            </ CardsGrid>
        </section>
    )
}
