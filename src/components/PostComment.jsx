import { addComment } from '../utils/api';
import { UserContext } from '../contexts/User';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostComment = ({ setComments, setIsLoading }) => {
	const [newComment, setNewComment] = useState('');
	const { user, isLoggedIn } = useContext(UserContext);
	const { article_id } = useParams();
	const [commentMessage, setCommentMessage] = useState('');

	const handleSubmit = (e) => {
		if (!newComment.length > 0) {
			setCommentMessage('Please add a comment before submitting');
		}

		setIsLoading(true);
		setCommentMessage('Comment sent thank you!');
		e.preventDefault();
		addComment(user, newComment, article_id).then(({ newComment }) => {
			setComments((currComments) => {
				const newComments = [...currComments, newComment];
				return newComments;
			});
			setIsLoading(false);
			setNewComment('');
			setTimeout(() => setCommentMessage(''), 2000);
		});
	};

	if (isLoggedIn) {
		return (
			<main>
				<p>{user} Please add a comment below!</p>
				<form onSubmit={handleSubmit}>
					<textarea
						id={newComment}
						value={newComment}
						onChange={(e) => setNewComment(e.target.value)}
						required
						minlength='1'
						maxlength='100'
					></textarea>
					<button>Post</button>
					<p>{commentMessage}</p>
				</form>
			</main>
		);
	}
};

export default PostComment;
