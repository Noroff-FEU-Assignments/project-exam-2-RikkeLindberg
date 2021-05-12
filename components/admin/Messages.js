import { useState, useEffect } from 'react';
import useAxios from '../../hooks/useAxios';

export default function Messages() {
    const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const http = useAxios();

	useEffect(function () {
		async function getMessages() {
			try {
				const response = await http.get("messages");
				console.log("response", response);
				setMessages(response.data);
			} catch (error) {
				console.log(error);
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}

		getMessages();
	}, []);

	if (loading) return <div>Loading messages...</div>;

	if (error) return <div>{}</div>;

	return (
		<ul>
			{messages.map((message) => {
				return (
					<li key={message.id}>
						<p>{message.full_name}</p>
						<p>{message.email}</p>
					</li>
				);
			})}
		</ul>
	);
}
