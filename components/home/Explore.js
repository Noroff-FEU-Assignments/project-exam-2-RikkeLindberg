import CardsGrid from '../layout/CardsGrid'
import Card from '../ui/Card'
import Heading from '../typography/Heading'

export default function Explore() {
    return (
        <section>
            <Heading size="2" title="Explore bergen" />
            <CardsGrid>
                <>
                    <Card src="/img/bea-fladstad-3IN0hvhUCiY-unsplash.jpg" 
                        alt="Fløibanen" 
                        title="Fløibanen" 
                        content="Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis" 
                        link="https://www.floyen.no/floibanen/" 
                        text="learn more" />
                    <Card src="/img/sharon-christina-rorvik-fwcnv0WRsTY-unsplash.jpg" 
                        alt="Trolltunga" 
                        title="Trolltunga" 
                        content="Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore." 
                        link="https://www.visitbergen.com/ting-a-gjore/guidet-overnattingstur-til-trolltunga-p5734853" 
                        text="learn more" 
                        />
                    <Card src="/img/lachlan-gowen-AG3EcbcQOjw-unsplash.jpg" 
                        alt="Bergen brygge" title="Bergen brygge" 
                        content="Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna" 
                        link="https://www.visitbergen.com/ting-a-gjore/bryggen-i-bergen-p878553" 
                        text="learn more" />
                    <Card src="/img/giachen-s-world-UcFzZLmQcW0-unsplash.jpg" 
                        alt="Akvariet" 
                        title="Akvariet" 
                        content="Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit, sed do eiusmod tempor" 
                        link="https://www.akvariet.no/" 
                        text="learn more" />
                </>
            </ CardsGrid>
        </section>
    )
}
