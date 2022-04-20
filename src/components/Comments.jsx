import { useEffect, useState } from 'react';
import { getArticleCommentsByID } from '../utils/api';
const Comments = (article_id) => {
	const [comments, setComments] = useState([]);
	useEffect(() => {
		getArticleCommentsByID(article_id).then((data) => {
			console.log(data);
		});
	});

	return (
		<main>
			<p>Coments here</p>
		</main>
	);
};

export default Comments;
