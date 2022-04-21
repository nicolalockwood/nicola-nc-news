import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticles } from '../utils/api';
import { Link } from 'react-router-dom';
import Votes from './Votes';

const Articles = () => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const { topic } = useParams();
	useEffect(() => {
		getArticles(topic)
			.then(({ articles }) => {
				setArticles(articles);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	}, [topic]);

	if (isLoading) {
		return <p>Articles Loading...</p>;
	}

	return (
		<main>
			<ul className='articlesList'>
				{articles.map((article) => {
					return (
						<li className='articlesList__article' key={article.article_id}>
							<h2>{article.title}</h2>
							<h3>Author:{article.author}</h3>
							<p>{article.body}</p>
							<p>Topic:{article.topic}</p>
							<Link to={`/articles/article/${article.article_id}`}>
								See More
							</Link>
							<Votes
								votes={article.votes}
								article_id={article.article_id}
							></Votes>
						</li>
					);
				})}
			</ul>
		</main>
	);
};

export default Articles;
