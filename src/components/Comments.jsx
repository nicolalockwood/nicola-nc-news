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
			<p>Coments here</p>
		</main>
	);
};

export default Comments;
