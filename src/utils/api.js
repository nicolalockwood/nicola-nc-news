import axios from 'axios';

const articlesApi = axios.create({
	baseURL: 'https://nicola-nc-news.herokuapp.com/api',
});

export const getArticles = (topic) => {
	return articlesApi
		.get('/articles', { params: { topic } })
		.then(({ data }) => {
			return data;
		});
};

export const getTopics = () => {
	return articlesApi.get('/topics').then(({ data }) => {
		return data;
	});
};

export const getArticlesByID = (article_id) => {
	return articlesApi.get(`/articles/${article_id}`).then(({ data }) => {
		return data;
	});
};

export const getArticleCommentsByID = (article_id) => {
	return articlesApi
		.get(`/articles/${article_id}/comments`)
		.then(({ data }) => {
			return data;
		});
};
