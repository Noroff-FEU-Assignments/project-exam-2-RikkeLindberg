import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Heading from '../typography/Heading';
import Button from '../ui/Button';
import { BASE_URL } from '../../constants/api';
import styles from './Forms.module.css';

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
            { posted && <div>The form was submitted</div> }
			{ postError && <div>Sorry! wrong</div> }
                <div>
                    <label htmlFor="full_name">Fullname</label>
                    <input 
                        type="text" 
                        name="full_name" 
                        {...register('full_name', { required: true })}
                    />
                    { errors.full_name && <p>{ errors.full_name.message }</p> }
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email"
                        {...register('email', { required: true })}
                    />
                    { errors.email && <p>{ errors.email.message }</p> }
                </div>
                <div>
                    <label htmlFor="subject">Subject</label>
                    <input 
                        type="text" 
                        name="subject"
                        {...register('subject', { required: true })}
                    />
                    { errors.subject && <p>{ errors.subject.message }</p> }
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        {...register('message', { required: true })}
                    />
                    { errors.message && <p>{ errors.message.message }</p> }
                </div>
                <Button type="submit" disabled={ submitting }>Submit</Button>
            </form>
        </div>
    )
}
