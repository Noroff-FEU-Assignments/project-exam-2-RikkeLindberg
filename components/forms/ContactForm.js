import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Heading from '../typography/Heading'
import FormButton from '../ui/FormButton'
import { BASE_URL } from '../../constants/api'
import styles from './Forms.module.css'

const url = BASE_URL + "messages";

export default function ContactForm() {
    const [posted, setPosted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
	const [postError, setPostError] = useState(null);

    const { register, handleSubmit, reset, formState: { errors }  } = useForm();

    async function onSubmit(data) {
		setSubmitting(true);
		setPostError(null);
        setPosted(false);
        reset();

		try {
			const response = await axios.post(url, data);
			console.log(response.data);
            setPosted(true);
		} catch (error) {
			console.log("error", error);
			setPostError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

    return (
        <div className={styles.container}>
            <Heading size="1" title="Contact us" />

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            { posted && <p className={styles.success}>Thank you! Your form was successfully submitted.</p> }
			{ postError && <p className={styles.error}>Sorry, something went wrong!</p> }

                <div>
                    <label htmlFor="full_name">First and last name</label>
                    { errors.full_name && errors.full_name.type === "required" && <p className={styles.error}>This field is required</p> }
                    { errors.full_name && errors.full_name.type === "minLength" && <p className={styles.warning}>Min length 3 characters</p> }
                    <input 
                        type="text" 
                        id="full_name"
                        {...register('full_name', { 
                            required: true, 
                            minLength: 3 
                        })}
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    { errors.email && errors.email.type === "required" && <p className={styles.error}>This field is required</p> }
                    { errors.email && errors.email.type === "pattern" && <p className={styles.warning}>Must contain '@' and '.'</p> }
                    <input 
                        type="email" 
                        id="email"
                        {...register('email', { 
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
                        })}
                    />
                </div>

                <div>
                    <label htmlFor="subject">Subject</label>
                    { errors.subject && errors.subject.type === "required" && <p className={styles.error}>This field is required</p> }
                    { errors.subject && errors.subject.type === "minLength" && <p className={styles.warning}>Min length 3 characters</p> }
                    <input 
                        type="text" 
                        id="subject"
                        {...register('subject', { 
                            required: true,
                            minLength: 3
                        })}
                    />
                </div>

                <div>
                    <label htmlFor="message">Message</label>
                    { errors.message && errors.message.type === "required" && <p className={styles.error}>This field is required</p> }
                    { errors.message && errors.message.type === "minLength" && <p className={styles.warning}>Min length 6 characters</p> }
                    <textarea
                        name="message"
                        {...register('message', { 
                            required: true,
                            minLength: 6
                        })}
                    />
                </div>

                <FormButton type="submit" disabled={ submitting }>Submit</FormButton>

            </form>
        </div>
    )
}
