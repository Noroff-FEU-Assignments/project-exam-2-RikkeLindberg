import { useState, useEffect } from 'react'
import Button from '../ui/Button'
import Heading from '../typography/Heading'
import useAxios from '../../hooks/useAxios'
import styles from './Admin.module.css'

export default function Enquiries() {
    const [enquiries, setEnquiries] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const http = useAxios();

	useEffect(function () {
		getEnquiries();
	}, []);

	async function getEnquiries() {
		try {
			const response = await http.get("enquiries");
			console.log("response", response);
			setEnquiries(response.data);
		} catch (error) {
			console.log(error);
			setError(error.toString());
		} finally {
			setLoading(false);
		}
	}

	async function deleteEnquiry(id) {
		const confirmDelete = window.confirm("Are you sure you want to delete this enquiry?");

		if (confirmDelete) {
			try {
				const response = await http.delete(`https://project-exam-2-holidaze.herokuapp.com/enquiries/${id}`);
				console.log(response)
				getEnquiries();
			} catch (error) {
				console.log(error);
			}
		}
	}

	if (error) return <div>{}</div>;

	return (
		<div className={styles.container}>
			<Heading size="3" title="Enquiries" />
			<ul className={styles.list}>
				{enquiries.map((enquiry) => {
					return (
						<li key={enquiry.id} className={styles.item}>
							<div>
								<span>Establishment:</span> {enquiry.establishment}
							</div>
							<div>
								<span>Name:</span> {enquiry.name}
							</div>
							<div>
								<span>Email:</span> {enquiry.email}
							</div>
							<div>
								<span>Check in:</span> {enquiry.check_in}
							</div>
							<div>
								<span>Check out:</span> {enquiry.check_out}
							</div>
							<div>
								<span>Guests:</span> {enquiry.max_guests}
							</div>
							<div>
								<span>Message:</span> {enquiry.message}
							</div>
							<Button link={`mailto: ${enquiry.email}`}>
								Reply
							</Button>
							<button className={styles.delete} onClick={() => deleteEnquiry(enquiry.id)}>Delete</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
