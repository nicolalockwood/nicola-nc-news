import axios from 'axios';

const articlesApi = axios.create({
	baseURL: 'https://nicola-nc-news.herokuapp.com/api',
});

export const getArticles = () => {
	return articlesApi.get('/articles').then(({ data }) => {
		return data;
	});
};
