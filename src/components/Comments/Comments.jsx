import { useEffect, useState, useContext } from 'react';
import { getArticleCommentsByID, deleteCommentByID } from '../../utils/api';
import PostComment from './PostComment';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/User';
import CommentVotes from './CommentVotes';

const Comments = () => {
	const { user } = useContext(UserContext);
	const [comments, setComments] = useState([]);
	const { article_id } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [disableButton, setDisableButton] = useState(false);
	const [page, setPage] = useState(1);

	useEffect(() => {
		getArticleCommentsByID(article_id, page).then(({ commentData }) => {
			setComments(commentData);
			setIsLoading(false);
		});
	}, [article_id, page]);

	const deleteComment = (comment_id) => {
		setDisableButton(true);

		deleteCommentByID(comment_id).then((res) => {
			setComments((currComments) => {
				return currComments.filter(
					(comment) => comment.comment_id !== comment_id
				);
			});
			setDisableButton(false);
		});
	};

	if (isLoading) {
		return <p>Comments Loading ...</p>;
	}

	if (user === 'Select User') {
		return <p>Please select user to post article</p>;
	}

	return (
		<main className='Comments'>
			<PostComment setComments={setComments} setIsLoading={setIsLoading} />

			<ul className='comment_list'>
				{comments.map((comment) => {
					return (
						<li className='comment_cards' key={comment.comment_id}>
							<h6 className='card-title'>
								<strong>{comment.author}</strong> {comment.created_at}
							</h6>
							<p className='comment_body'>{comment.body}</p>
							<div className='commentList_button-container'>
								<CommentVotes
									votes={comment.votes}
									comment_id={comment.comment_id}
								></CommentVotes>
								<p>
									{user === comment.author ? (
										<button
											className='commentList_delete-button'
											onClick={() => deleteComment(comment.comment_id)}
											disabled={disableButton}
										>
											🗑️ DELETE
										</button>
									) : null}
								</p>
							</div>
						</li>
					);
				})}
			</ul>
			<section className='pagination'>
				<button
					className='pagination_prevpage'
					onClick={(e) => {
						setPage((currPage) => currPage - 1);
					}}
					disabled={page === 1}
				>
					Previous Page
				</button>
				<button
					className='pagination_nextpage'
					onClick={(e) => {
						setPage((currPage) => currPage + 1);
					}}
					disabled={comments.length < 10}
				>
					Next Page
				</button>
			</section>
		</main>
	);
};

export default Comments;
