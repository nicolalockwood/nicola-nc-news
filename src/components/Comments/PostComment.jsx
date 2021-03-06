import { addComment } from '../../utils/api';
import { UserContext } from '../../contexts/User';
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
				const newComments = [newComment, ...currComments];
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
				<form className='input-group mb-3' onSubmit={handleSubmit}>
					<textarea
						type='text'
						className='form-control'
						placeholder='Comment Here'
						aria-label='comment'
						aria-describedby='button-addon2'
						id={newComment}
						value={newComment}
						onChange={(e) => setNewComment(e.target.value)}
						required
						minLength='1'
						maxLength='100'
					></textarea>
					<button className='postButton'>Post</button>

					<p>{commentMessage}</p>
				</form>
			</main>
		);
	}
};

export default PostComment;
