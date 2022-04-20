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
