import { useEffect, useState } from 'react';
import { getArticles } from '../utils/api';

const Articles = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		getArticles().then((articlesFromApi) => {
			console.log(articlesFromApi.articles);
			setArticles(articlesFromApi.articles);
		});
	}, []);

	return (
		<main>
			<h2>All Articles</h2>
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
