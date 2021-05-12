import { useState, useEffect } from 'react';
import useAxios from '../../hooks/useAxios';

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
		<ul>
			{enquiries.map((enquiry) => {
				return (
					<li key={enquiry.id}>
						<p>{enquiry.establishment}</p>
						<p>{enquiry.email}</p>
					</li>
				);
			})}
		</ul>
	);
}
