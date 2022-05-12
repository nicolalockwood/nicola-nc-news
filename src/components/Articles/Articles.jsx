import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { deleteArticleByID, getArticles } from '../../utils/api';
import { Link } from 'react-router-dom';
import Votes from './Votes';
import PostArticle from './PostArticle';
import { UserContext } from '../../contexts/User';
import SortButtons from './SortButtons';

const Articles = () => {
	const { user } = useContext(UserContext);
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [sortBy, setSortBy] = useState('created_at');
	const [order, setOrder] = useState('DESC');
	const [error, setError] = useState(null);
	const [disableButton, setDisableButton] = useState(false);
	const [page, setPage] = useState(1);

	const { topic } = useParams();

	useEffect(() => {
		getArticles(topic, sortBy, order, page)
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
	}, [topic, sortBy, order, page]);

	const deleteArticle = (article_id) => {
		setDisableButton(true);
		deleteArticleByID(article_id).then((res) => {
			setArticles((currArticles) => {
				return currArticles.filter(
					(article) => article.article_id !== article_id
				);
			});
			setDisableButton(false);
		});
	};

	if (isLoading) {
		return <p>Articles Loading...</p>;
	}

	if (error) {
		return <p>Topic not found</p>;
	}

	return (
		<main>
			<PostArticle
				setArticles={setArticles}
				setIsLoading={setIsLoading}
			></PostArticle>
			<SortButtons
				setSortBy={setSortBy}
				setOrder={setOrder}
				order={order}
				sortBy={setSortBy}
			/>

			<ul className='articlesList'>
				{articles.map((article) => {
					return (
						<li className='articlesList__article' key={article.article_id}>
							<h6 className='articleList_header'>
								<strong>{article.author} </strong> {article.created_at} Topic:
								{article.topic}
							</h6>

							<h6 className='articleList_title'>{article.title}</h6>

							<p className='card-text'>{article.body.substring(0, 150)}... </p>
							<div className='articleList_button-container'>
								<Link
									className='articleList_seemore-button'
									to={`/articles/article/${article.article_id}`}
								>
									💬{article.comment_count} See More
								</Link>

								<Votes
									votes={article.votes}
									article_id={article.article_id}
								></Votes>

								<p>
									{user === article.author ? (
										<button
											className='articleList_delete-button'
											onClick={() => deleteArticle(article.article_id)}
											disabled={disableButton}
										>
											🗑️ DELETE
										</button>
									) : null}
								</p>
							</div>
						</li>
					);
				})}
			</ul>
			<section className='pagination'>
				<button
					className='pagination_prevpage'
					onClick={(e) => {
						setPage((currPage) => currPage - 1);
					}}
					disabled={page === 1}
				>
					Previous Page
				</button>
				<button
					className='pagination_nextpage'
					onClick={(e) => {
						setPage((currPage) => currPage + 1);
					}}
					disabled={articles.length < 10}
				>
					Next Page
				</button>
			</section>
		</main>
	);
};

export default Articles;
