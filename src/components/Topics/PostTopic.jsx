import { addTopic } from '../../utils/api';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/User';

const PostTopic = ({ setTopics }) => {
	const [newTopic, setNewTopic] = useState('');
	const [newDescription, setNewDescription] = useState('');
	const { isLoggedIn } = useContext(UserContext);
	const [topicMessage, setTopicMessage] = useState('');

	const handleSubmit = (e) => {
		if (!newTopic.length > 0 || !newDescription.length > 0) {
			setTopicMessage('Please add topic and description before submitting');
		}
		setTopicMessage('Topic added thank you!');
		e.preventDefault();
		addTopic(newTopic, newDescription).then(({ newTopic }) => {
			setTopics((currTopics) => {
				const newTopics = [...currTopics, newTopic];
				return newTopics;
			});
			setNewTopic('');
			setNewDescription('');
			setTimeout(() => setTopicMessage(''), 2000);
		});
	};
	if (isLoggedIn) {
		return (
			<main className='Add_Topic'>
				<p>Post a new topic here</p>
				<form onSubmit={handleSubmit}>
					<label id={newTopic}>New Topic:</label>
					<textarea
						id={newTopic}
						value={newTopic}
						onChange={(e) => setNewTopic(e.target.value)}
						required
						minLength='1'
						maxLength='10'
					></textarea>
					<label>Description</label>
					<textarea
						id={newDescription}
						value={newDescription}
						onChange={(e) => setNewDescription(e.target.value)}
						required
						minLength='1'
						maxLength='50'
					></textarea>
					<button>Add Topic</button>
					<p>{topicMessage}</p>
				</form>
			</main>
		);
	}
};

export default PostTopic;
