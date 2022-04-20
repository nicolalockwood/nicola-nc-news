import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticles } from '../utils/api';

const Articles = () => {
	const [articles, setArticles] = useState([]);
	const { topic } = useParams();
	useEffect(() => {
		getArticles(topic).then(({ articles }) => {
			setArticles(articles);
		});
	}, [topic]);

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
						</li>
					);
				})}
			</ul>
		</main>
	);
};

export default Articles;
