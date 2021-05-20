import { useState, useEffect } from 'react'
import Heading from '../typography/Heading'
import useAxios from '../../hooks/useAxios'
import styles from './Admin.module.css'

export default function Enquiries() {
    const [enquiries, setEnquiries] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const http = useAxios();

	useEffect(function () {
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

		getEnquiries();
	}, []);

	if (loading) return <div>Loading messages...</div>;

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
								<span>Message:</span> {enquiry.message}
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
