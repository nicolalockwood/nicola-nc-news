import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticles } from '../utils/api';
import { Link } from 'react-router-dom';
import Votes from './Votes';
import ErrorPage from './ErrorPage';

const Articles = () => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [sortBy, setSortBy] = useState('created_at');
	const [order, setOrder] = useState('DESC');
	const [error, setError] = useState(null);

	const { topic } = useParams();

	useEffect(() => {
		getArticles(topic, sortBy, order)
			.then(({ articles }) => {
				setArticles(articles);
				setIsLoading(false);
				setError(null);
			})
			.catch((err) => {
				console.log(err.response.data);
				setError({ err });
				setIsLoading(false);
			});
	}, [topic, sortBy, order]);

	if (isLoading) {
		return <p>Articles Loading...</p>;
	}

	if (error) {
		return <p>Topic not found</p>;
	}

	return (
		<main>
			<section className='filter_buttons'>
				<button
					onClick={(e) => {
						setSortBy('created_at');
					}}
				>
					Sort By Date
				</button>
				<button
					onClick={(e) => {
						setSortBy('comment_count');
					}}
				>
					Sort By Comment Count
				</button>
				<button
					onClick={(e) => {
						setSortBy('votes');
					}}
				>
					Sort By Vote Count
				</button>
				<button
					onClick={(e) => {
						setOrder('ASC');
					}}
				>
					Order Ascending
				</button>
				<button
					onClick={(e) => {
						setOrder('DESC');
					}}
				>
					Order Descending
				</button>
				<p>
					Showing results by {sortBy} in order {order}
				</p>
			</section>

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
