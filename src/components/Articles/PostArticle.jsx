import { addArticle } from '../../utils/api';
import { UserContext } from '../../contexts/User';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostArticle = ({ setArticles, setIsLoading }) => {
	const [newArticle, setNewArticle] = useState('');
	const { user, isLoggedIn } = useContext(UserContext);
	const { topic } = useParams();
	const [articleMessage, setArticleMessage] = useState('');
	const [title, setTitle] = useState('');

	const handleSubmit = (e) => {
		if (!newArticle.length > 0 || !title.length > 0) {
			setArticleMessage('Please add title and article before submitting');
		}
		setIsLoading(true);
		setArticleMessage('Article Posted thank you!');
		e.preventDefault();
		addArticle(user, newArticle, topic, title).then(({ newArticle }) => {
			setArticles((currArticles) => {
				const newArticles = [...currArticles, newArticle];
				return newArticles;
			});
			setIsLoading(false);
			setNewArticle('');
			setTitle('');
			setTimeout(() => setArticleMessage(''), 2000);
		});
	};

	if (user === 'Select User') {
		return <p>Please select user & topic to post article</p>;
	}

	if (isLoggedIn && topic) {
		return (
			<main className='Add_article'>
				<p>
					{user} add your new article about {topic} here!
				</p>
				<form
					className='input-group input-group-sm mb-3'
					onSubmit={handleSubmit}
				>
					<span className='input-group-text' id='inputGroup-sizing-sm'>
						Article Title
					</span>

					<textarea
						type='text'
						className='form-control'
						aria-label='Sizing example input'
						aria-describedby='inputGroup-sizing-sm'
						id={title}
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
						minLength='1'
						maxLength='40'
					></textarea>
					<span className='input-group-text' id='inputGroup-sizing-sm'>
						Body
					</span>

					<textarea
						type='text'
						className='form-control'
						aria-label='Sizing example input'
						aria-describedby='inputGroup-sizing-sm'
						id={newArticle}
						value={newArticle}
						onChange={(e) => setNewArticle(e.target.value)}
						required
						minLength='10'
						maxLength='500'
					></textarea>
					<button className='postButton'>Post</button>
					<p>{articleMessage}</p>
				</form>
			</main>
		);
	}
};

export default PostArticle;
