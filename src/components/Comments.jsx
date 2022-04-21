import { useEffect, useState } from 'react';
import { getArticleCommentsByID } from '../utils/api';
import PostComment from './PostComment';
import { useParams } from 'react-router-dom';

const Comments = () => {
	const [comments, setComments] = useState([]);
	const { article_id } = useParams();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getArticleCommentsByID(article_id).then(({ commentData }) => {
			setComments(commentData);
			setIsLoading(false);
		});
	});
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
							<p>Votes:{comment.votes}</p>
							<p>Created at:{comment.created_at}</p>
						</li>
					);
				})}
			</ul>
		</main>
	);
};

export default Comments;
