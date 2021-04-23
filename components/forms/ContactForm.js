import Heading from '../typography/Heading';
import Button from '../ui/Button';
import styles from './Forms.module.css';

export default function ContactForm() {
    return (
        <div className={styles.container}>
            <Heading size="1" title="Contact us" />
            <form className={styles.form} name="contact">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" />
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}
