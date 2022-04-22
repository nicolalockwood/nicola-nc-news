import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticlesByID } from '../utils/api';
import Comments from './Comments';
const IndividualArticle = () => {
	const { article_id } = useParams();
	const [individualArticle, setIndividualArticle] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getArticlesByID(article_id)
			.then(({ article }) => {
				setIndividualArticle(article);
				setIsLoading(false);
				setError(null);
			})
			.catch((err) => {
				console.log(err.response.data);
				setError({ err });
				setIsLoading(false);
			});
	}, [article_id]);

	if (isLoading) {
		return <p>Article Loading...</p>;
	}

	if (error) {
		return <p>Article not found</p>;
	}
	return (
		<main>
			<p>Individual Article number {article_id}</p>
			<h1>{individualArticle.title}</h1>

			<p>{individualArticle.body}</p>
			<p>Author: {individualArticle.author}</p>
			<p>Comment Count: {individualArticle.comment_count}</p>
			<p>Created: {individualArticle.created_at}</p>
			<p>Topic: {individualArticle.topic}</p>
			<p>Votes: {individualArticle.votes}</p>
			<Comments article_id={individualArticle.article_id}></Comments>
		</main>
	);
};

export default IndividualArticle;
