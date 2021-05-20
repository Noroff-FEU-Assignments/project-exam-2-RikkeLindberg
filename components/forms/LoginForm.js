import axios from 'axios'
import { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import AuthContext from '../../context/AuthContext'
import Heading from '../typography/Heading'
import FormButton from '../ui/FormButton'
import { BASE_URL } from '../../constants/api'
import styles from './Forms.module.css'

const url = BASE_URL + "auth/local";

export default function LoginForm() {
    const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);

    const router = useRouter();

    const { register, handleSubmit, formState: { errors }  } = useForm();

    const [auth, setAuth] = useContext(AuthContext);

    async function onSubmit({username, password}) {
		setSubmitting(true);
		setLoginError(null);

		try {
			const response = await axios.post( url, { 
				identifier: username, 
				password: password 	
			});
			console.log(response.data);
            setAuth(response.data.jwt);
			router.push("/admin");
		} catch (error) {
			console.log("error", error);
			setLoginError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}
    
    return (
        <div className={styles.container}>
            <Heading size="1" title="Login" />

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				{ loginError && <p className={styles.error}>Sorry, wrong username or password, please provide the correct credentials</p> }

					<div>
                        <label htmlFor="username">Username:</label>
						{ errors.username && errors.username.type === "required" && <p className={styles.error}>Please provide your username</p> }
						<input 
							id="username"
							type="text"
                            {...register('username', { required: true })} 
						/>
					</div>

					<div>
                        <label htmlFor="password">Password:</label>
						{ errors.password && errors.password.type === "required" && <p className={styles.error}>Please provide your password</p> }
						<input 
							id="password" 
							type="password"
                            {...register('password', { required: true })} 
						/>
					</div>

					<FormButton type="submit" disabled={ submitting }>Login</FormButton>

			</form>
        </div>
    )
}