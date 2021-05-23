import { useState, useEffect } from 'react'
import Button from '../ui/Button'
import Heading from '../typography/Heading'
import useAxios from '../../hooks/useAxios'
import styles from './Admin.module.css'

export default function Messages() {
    const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const http = useAxios();

	useEffect(function () {
		getMessages();
	}, []);

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

    async function deleteMessage(id) {
		const confirmDelete = window.confirm("Are you sure you want to delete this message?");

		if (confirmDelete) {
			try {
				const response = await http.delete(`https://project-exam-2-holidaze.herokuapp.com/messages/${id}`);
				console.log(response)
				getMessages();
			} catch (error) {
				console.log(error);
			}
		}
	}

	if (loading) return <div>Loading messages...</div>;

	if (error) return <div>{}</div>;

	return (
		<div className={styles.container}>
			<Heading size="3" title="Messages" />
			<ul className={styles.list}>
				{messages.map((message) => {
					return (
						<li key={message.id} className={styles.item}>
							<div>
								<span>Name:</span> {message.full_name}
							</div>
							<div>
								<span>Email:</span> {message.email}
							</div>
							<div>
								<span>Subject:</span> {message.subject}
							</div>
							<div>
								<span>Message:</span> {message.message}
							</div>
							<Button link={`mailto: ${message.email}`}>
								Reply
							</Button>
							<button className={styles.delete} onClick={() => deleteMessage(message.id)}>Delete</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
