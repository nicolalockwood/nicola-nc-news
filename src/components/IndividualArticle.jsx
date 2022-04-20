import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticlesByID } from '../utils/api';
import Articles from './Articles';
const IndividualArticle = () => {
	const { article_id } = useParams();
	const [individualArticle, setIndividualArticle] = useState([]);

	useEffect(() => {
		getArticlesByID(article_id).then(({ article }) => {
			setIndividualArticle(article);
		});
	}, [article_id]);
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
		</main>
	);
};

export default IndividualArticle;
