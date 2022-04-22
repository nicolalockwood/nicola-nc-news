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
		console.log(topic);
		console.log(user);
		console.log(newArticle);
		console.log(title);
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

	if (isLoggedIn && topic) {
		return (
			<main className='Add_article'>
				<p>
					{user} add your new article about {topic} here!
				</p>
				<form onSubmit={handleSubmit}>
					<label>Title:</label>
					<textarea
						id={title}
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
						minLength='1'
						maxLength='40'
					></textarea>
					<label>Body:</label>
					<textarea
						id={newArticle}
						value={newArticle}
						onChange={(e) => setNewArticle(e.target.value)}
						required
						minLength='10'
						maxLength='500'
					></textarea>
					<button>Post</button>
					<p>{articleMessage}</p>
				</form>
			</main>
		);
	}
};

export default PostArticle;
