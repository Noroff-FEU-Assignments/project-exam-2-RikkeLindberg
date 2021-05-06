import axios from "axios";
import { useState, useContext  } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import AuthorisationContext from "../../context/AuthorisationContext";
import { BASE_URL } from "../../constants/api";
import Heading from '../typography/Heading';
import styles from "./Forms.module.css";

const url = BASE_URL + "auth/local";

export default function LoginForm() {
    const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);

    const router = useRouter();

    const { register, handleSubmit, formState: { errors }  } = useForm();

    const [auth, setAuth] = useContext(AuthorisationContext);


    async function onSubmit(data) {
		setSubmitting(true);
		setLoginError(null);

		console.log(data);

		try {
			const response = await axios.post(url, {
				identifier: username,
				password: password,
			});
			console.log(response.data);
            setAuth(response.jwt);
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
				{ loginError && <p>Sorry! Wrong username or password</p> }
					<div>
                        <label htmlFor="username">Username:</label>
						<input 
							name="username" 
                            {...register('You must enter a username', { required: true })} />
						{ errors.username && <p>{ errors.username.message }</p> }
					</div>

					<div>
                        <label htmlFor="password">Password:</label>
						<input 
							name="password" 
							type="password" 
                            {...register('You must enter a password', { required: true })} />
						{ errors.password && <p>{ errors.password.message }</p> }
					</div>
					<button disabled={ submitting }>Login</button>
			</form>
        </div>
    )
}