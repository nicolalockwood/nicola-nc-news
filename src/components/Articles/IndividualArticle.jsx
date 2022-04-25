import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticlesByID } from '../../utils/api';
import Comments from '../Comments/Comments';
import Votes from './Votes';
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
			<section className='individual_article'>
				<div key={article_id}></div>
				<h6 className='card-title'>
					<strong>{individualArticle.author}</strong>
					{individualArticle.created_at} Topic: {individualArticle.topic}
				</h6>
				<h6 className='individual_article_header'>{individualArticle.title}</h6>
				<p className='card-text'>{individualArticle.body}</p>
				<div className='container'>
					<div className='row'>
						<div className='col'>💬 {individualArticle.comment_count}</div>
						<div className='col'>
							<Votes
								votes={individualArticle.votes}
								article_id={individualArticle.article_id}
							></Votes>
						</div>
					</div>
				</div>
			</section>
			<Comments article_id={individualArticle.article_id}></Comments>
		</main>
	);
};

export default IndividualArticle;
