import Heading from '../typography/Heading';
import Button from '../ui/Button';
import styles from './Forms.module.css';

export default function LoginForm() {
    return (
        <div className={styles.container}>
            <Heading size="1" title="Login" />
            <form className={styles.form} name="login">
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="name" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <Button type="submit">Login</Button>
            </form>
        </div>
    )
}
