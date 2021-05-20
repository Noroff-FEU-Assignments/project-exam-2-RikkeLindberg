import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Heading from '../../components/typography/Heading'
import FormButton from '../../components/ui/FormButton'
import { BASE_URL } from '../../constants/api'

const url = BASE_URL + "enquiries";

export default function Enquiry() {
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

    const router = useRouter();

    const { slug } = router.query;

    console.log({slug});

    const slugName = slug.replace("-", " ");

    return (
        <section>
            <Heading size="2" title="enquiry" />
                <form onSubmit={handleSubmit(onSubmit)}>
                { posted && <p>Thank you! Your enquiry was successfully submitted.</p> }
			    { postError && <p>Sorry, something went wrong!</p> }

                    <div>
                        <label htmlFor="establishment">Establishment:</label>
                        <input 
                            name="establishment"
                            disabled
                            defaultValue={slugName}
                            {...register('establishment')} />
                    </div>

					<div>
                        <label htmlFor="name">Name:</label>
                        { errors.name && errors.name.type === "required" && <p>This field is required</p> }
                        { errors.name && errors.name.type === "minLength" && <p>Min length 3 characters</p> }
						<input 
							name="name"
                            {...register('name', { 
                                required: true,
                                minLength: 3
                            })} 
                        />
					</div>

					<div>
                        <label htmlFor="email">Email:</label>
                        { errors.email && errors.email.type === "required" && <p>This field is required</p> }
                        { errors.email && errors.email.type === "pattern" && <p>Must contain '@' and '.'</p> }
						<input 
							name="email" 
                            {...register('email', { 
                                required: true, 
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                            })} 
                        />
					</div>

                    <div>
                        <label htmlFor="max_guests">Guests:</label>
                        { errors.max_guests && errors.max_guests.type === "required" && <p>This field is required</p> }
						<select 
							name="max_guests"
                            {...register('max_guests', { required: true })}
                        >
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
					</div>

                    <div>
                        <label htmlFor="check_in">Check in:</label>
                        { errors.check_in && errors.check_in.type === "required" && <p>This field is required</p> }
						<input 
							name="check_in"
                            type="date"
                            {...register('check_in', { required: true })} />
					</div>

                    <div>
                        <label htmlFor="check_out">Check out:</label>
                        { errors.check_out && errors.check_out.type === "required" && <p>This field is required</p> }
						<input 
							name="check_out"
                            type="date"
                            {...register('check_out', { required: true })} />
					</div>

                    <div>
                        <label htmlFor="message">Message:</label>
                        { errors.message && errors.message.type === "required" && <p>This field is required</p> }
                        { errors.message && errors.message.type === "minLength" && <p>Min length 6 characters</p> }
						<textarea 
							name="message" 
                            {...register('message', { 
                                required: true,
                                minLength: 6 
                            })} 
                        />
					</div>

					<FormButton disabled={ submitting }>submit</FormButton>
			    </form>
        </section>
    );
} 
    