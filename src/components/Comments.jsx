import { useEffect, useState } from 'react';
import { getArticleCommentsByID } from '../utils/api';
const Comments = (article_id) => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		getArticleCommentsByID(article_id.article_id).then(({ commentData }) => {
			setComments(commentData);
		});
	});

	return (
		<main>
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
			<p>Coments here</p>
		</main>
	);
};

export default Comments;
