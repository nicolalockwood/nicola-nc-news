import { useEffect, useState, useContext } from 'react';
import { getArticleCommentsByID, deleteCommentByID } from '../utils/api';
import PostComment from './PostComment';
import { useParams } from 'react-router-dom';
import { UserContext } from '../contexts/User';
import CommentVotes from './CommentVotes';

const Comments = () => {
	const { user, isLoggedIn } = useContext(UserContext);
	const [comments, setComments] = useState([]);
	const { article_id } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [disableButton, setDisableButton] = useState(false);

	useEffect(() => {
		getArticleCommentsByID(article_id).then(({ commentData }) => {
			setComments(commentData);
			setIsLoading(false);
		});
	});

	const deleteComment = (comment_id) => {
		setDisableButton(true);
		setComments((currComments) => {
			return currComments.filter(
				(comment) => comment.comment_id !== comment_id
			);
		});
		deleteCommentByID(comment_id).catch(() => {
			setComments((currComments) => {
				<p>Delete Unsuccessful</p>;
				return currComments;
			});
		});
	};

	if (isLoading) {
		return <p>Comments Loading ...</p>;
	}

	return (
		<main>
			<PostComment setComments={setComments} setIsLoading={setIsLoading} />
			<ul className='comment_list'>
				{comments.map((comment) => {
					return (
						<li className='comment_cards' key={comment.comment_id}>
							<h2>{comment.author}</h2>
							<p>{comment.body}</p>
							<CommentVotes
								votes={comment.votes}
								comment_id={comment.comment_id}
							></CommentVotes>
							<p>Created at:{comment.created_at}</p>
							<p>
								{user === comment.author ? (
									<button
										onClick={() => deleteComment(comment.comment_id)}
										disabled={disableButton}
									>
										Delete
									</button>
								) : null}
							</p>
						</li>
					);
				})}
			</ul>
		</main>
	);
};

export default Comments;
