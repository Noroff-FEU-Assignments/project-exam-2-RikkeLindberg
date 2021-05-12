import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'
import { BASE_URL } from "../../constants/api";
import Heading from '../../components/typography/Heading';

const url = BASE_URL + "enquiries";

export default function Enquiry() {
    const [posted, setPosted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
	const [postError, setPostError] = useState(null);

    const { register, handleSubmit, formState: { errors }  } = useForm();

    async function onSubmit(data) {
		setSubmitting(true);
		setPostError(null);
        setPosted(false);

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

    const router = useRouter();

    const { slug } = router.query;

    console.log({slug});

    const slugName = slug.replace("-", " ");

    return (
        <>
            <Heading size="2" title="enquiry" />
                <form onSubmit={handleSubmit(onSubmit)}>
                { posted && <div>The form was submitted</div> }
				{ postError && <div>Sorry! wrong</div> }
                    <div>
                        <label htmlFor="establishment">Establishment:</label>
                        <input 
                            name="establishment"
                            defaultValue={slugName}
                            {...register('establishment', { required: true })} />
                        { errors.establishment && <p>{ errors.establishment.message }</p> }
                    </div>

					<div>
                        <label htmlFor="name">Name:</label>
						<input 
							name="name"
                            {...register('name', { required: true })} />
						{ errors.name && <p>{ errors.name.message }</p> }
					</div>

					<div>
                        <label htmlFor="email">Email:</label>
						<input 
							name="email" 
                            {...register('email', { required: true })} />
						{ errors.email && <p>{ errors.email.message }</p> }
					</div>

                    <div>
                        <label htmlFor="message">Message:</label>
						<input 
							name="message" 
                            {...register('message', { required: true })} />
						{ errors.message && <p>{ errors.message.message }</p> }
					</div>

                    <div>
                        <label htmlFor="guests">Guests:</label>
						<select 
							name="guests"
                            {...register('max_guests', { required: true })}
                        >
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
						{ errors.date && <p>{ errors.date.message }</p> }
					</div>

                    <div>
                        <label htmlFor="checkin">Check-in:</label>
						<input 
							name="checkin"
                            type="date"
                            {...register('check_in', { required: true })} />
						{ errors.date && <p>{ errors.date.message }</p> }
					</div>

                    <div>
                        <label htmlFor="checkout">Check-out:</label>
						<input 
							name="checkout"
                            type="date"
                            {...register('check_out', { required: true })} />
						{ errors.date && <p>{ errors.date.message }</p> }
					</div>

					<button disabled={ submitting }>submit</button>
			    </form>
        </>
    );
} 
    