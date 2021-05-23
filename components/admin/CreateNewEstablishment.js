import { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormButton from '../ui/FormButton'
import Heading from '../typography/Heading'
import useAxios from '../../hooks/useAxios'
import styles from '../forms/Forms.module.css'


export default function CreateNewEstablishment() {
    const [added, setAdded] = useState(false);
    const [submitting, setSubmitting] = useState(false);
	const [addError, setAddError] = useState(null);

    const { register, handleSubmit, reset, formState: { errors }  } = useForm();

    const http = useAxios();

    async function onSubmit(data) {
		setSubmitting(true);
		setAddError(null);
        setAdded(false);
        reset();

        const formData = new FormData()
        const file = image.files[0];
        formData.append("files.image", file);
        formData.append("data", JSON.stringify(data));

		try {
			const response = await http.post("establishments", {data: formData});
			console.log(response.data);
            setAdded(true);
		} catch (error) {
			console.log("error", error);
			setAddError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

    return (
        <div className={styles.container}>
            <Heading size="1" title="Create new"/>
            
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            { added && <p className={styles.success}>The form was submitted</p> }
			{ addError && <p className={styles.error}>Sorry, something went wrong!</p> }
                
                <div>
                    <label htmlFor="name">Name</label>
                    { errors.name && errors.name.type === "required" && <p className={styles.error}>This field is required</p> }
                    <input 
                        type="text" 
                        name="name" 
                        {...register('name', { required: true })}
                    />
                </div>

                <div>
                    <label htmlFor="address">Address</label>
                    { errors.address && errors.address.type === "required" && <p className={styles.error}>This field is required</p> }
                    <input 
                        type="text" 
                        name="address"
                        {...register('address', { required: true })}
                    />
                </div>

                <div>
                    <label htmlFor="price">Price</label>
                    { errors.price && errors.price.type === "required" && <p className={styles.error}>This field is required</p> }
                    <input 
                        type="number" 
                        name="price"
                        {...register('price', { required: true })}
                    />
                </div>

                <div>
                    <label htmlFor="max_guests">Max guests</label>
                    { errors.max_guests && errors.max_guests.type === "required" && <p className={styles.error}>This field is required</p> }
                    <input
                        name="max_guests"
                        {...register('max_guests', { required: true })}
                    />
                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    { errors.descriptions && errors.description.type === "required" && <p className={styles.error}>This field is required</p> }
                    <textarea
                        type="text"
                        name="description"
                        {...register('description', { required: true })}
                    />
                </div>

                <div>
                    <label htmlFor="file">Image</label>
                    { errors.file && errors.file.type === "required" && <p className={styles.error}>This field is required</p> }
                    <input
                        type="file"
                        name="file"
                        id="image"
                        {...register('file', { required: true })}
                    />
                </div>

                <div>
                    <label htmlFor="slug">Slug</label>
                    { errors.slug && errors.slug.type === "required" && <p className={styles.error}>This field is required</p> }
                    <input 
                        type="text" 
                        name="slug" 
                        {...register('slug', { required: true })}
                    />
                </div>

                <FormButton type="submit" disabled={ submitting }>Submit</FormButton>

            </form>
        </div>
    )
}

