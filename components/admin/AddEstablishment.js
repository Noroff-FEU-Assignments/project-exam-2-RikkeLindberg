import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxios from '../../hooks/useAxios';


export default function AddEstablishment() {
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
            <form onSubmit={handleSubmit(onSubmit)}>
            { added && <div>The form was submitted</div> }
			{ addError && <div>Sorry! wrong</div> }
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        {...register('name', { required: true })}
                    />
                    { errors.name && <p>{ errors.name.message }</p> }
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input 
                        type="text" 
                        name="address"
                        {...register('address', { required: true })}
                    />
                    { errors.address && <p>{ errors.address.message }</p> }
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input 
                        type="number" 
                        name="price"
                        {...register('price', { required: true })}
                    />
                    { errors.price && <p>{ errors.price.message }</p> }
                </div>
                <div>
                    <label htmlFor="max_guests">Max guests</label>
                    <input
                        name="max_guests"
                        {...register('max_guests', { required: true })}
                    />
                    { errors.max_guests && <p>{ errors.max_guests.message }</p> }
                </div>
                <div>
                    <label htmlFor="lat">Latitude</label>
                    <input
                        type="number"
                        name="lat"
                        {...register('lat', { required: true })}
                    />
                    { errors.lat && <p>{ errors.lat.message }</p> }
                </div>
                <div>
                    <label htmlFor="lng">Longitude</label>
                    <input
                        type="number"
                        name="lng"
                        {...register('lng', { required: true })}
                    />
                    { errors.lng && <p>{ errors.lng.message }</p> }
                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        type="text"
                        name="description"
                        {...register('description', { required: true })}
                    />
                    { errors.description && <p>{ errors.description.message }</p> }
                </div>
                <div>
                    <label htmlFor="file">Image</label>
                    <input
                        type="file"
                        name="file"
                        id="image"
                        {...register('file', { required: true })}
                    />
                    { errors.description && <p>{ errors.description.message }</p> }
                </div>
                <div>
                    <label htmlFor="slug">Slug</label>
                    <input 
                        type="text" 
                        name="slug" 
                        {...register('slug', { required: true })}
                    ></input>
                    { errors.name && <p>{ errors.name.message }</p> }
                </div>
                <button type="submit" disabled={ submitting }>Submit</button>
            </form>
    )
}

