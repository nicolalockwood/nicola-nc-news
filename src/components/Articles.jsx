import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticles } from '../utils/api';
import { Link } from 'react-router-dom';
import Votes from './Votes';

const Articles = () => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const { topic, sort_by } = useParams();
	console.log(topic, sort_by);

	useEffect(() => {
		getArticles(topic, sort_by)
			.then(({ articles }) => {
				setArticles(articles);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	}, [topic, sort_by]);

	if (isLoading) {
		return <p>Articles Loading...</p>;
	}

	return (
		<main>
			<Link
				to={`/articles/${topic}/created_at
			`}
			>
				Sort by Date
			</Link>
			<Link to={`/articles/${topic}/comment_count`}>Sort by Comment Count</Link>
			<Link to={`/articles/${topic}/votes`}>Sort by Votes</Link>

			<ul className='articlesList'>
				{articles.map((article) => {
					return (
						<li className='articlesList__article' key={article.article_id}>
							<h2>{article.title}</h2>
							<h3>Author:{article.author}</h3>
							<p>{article.body}</p>
							<p>Topic:{article.topic}</p>
							<p>Created at: {article.created_at}</p>
							<p>Comment count: {article.comment_count}</p>
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
