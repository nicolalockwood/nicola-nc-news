import { addTopic } from '../../utils/api';
import { useState } from 'react';

// import Modal from 'react-modal';

// Modal.setAppElement(PostTopic);

const PostTopic = ({ setTopics, hidePost }) => {
	const [newTopic, setNewTopic] = useState('');
	const [newDescription, setNewDescription] = useState('');
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
	if (!hidePost) {
		return (
			<main className='Add_Topic'>
				<form
					className='input-group input-group-sm mb-3'
					onSubmit={handleSubmit}
				>
					<span className='input-group-text' id='inputGroup-sizing-sm'>
						New Topic
					</span>

					<textarea
						type='text'
						className='form-control'
						aria-label='Sizing example input'
						aria-describedby='inputGroup-sizing-sm'
						id={newTopic}
						value={newTopic}
						onChange={(e) => setNewTopic(e.target.value)}
						required
						minLength='1'
						maxLength='10'
					></textarea>
					<span className='input-group-text' id='inputGroup-sizing-sm'>
						Description
					</span>
					<textarea
						type='text'
						className='form-control'
						aria-label='Sizing example input'
						aria-describedby='inputGroup-sizing-sm'
						id={newDescription}
						value={newDescription}
						onChange={(e) => setNewDescription(e.target.value)}
						required
						minLength='1'
						maxLength='50'
					></textarea>
					<button className='postButton'>Add Topic</button>
					<p>{topicMessage}</p>
				</form>
			</main>
		);
	}
};

export default PostTopic;
