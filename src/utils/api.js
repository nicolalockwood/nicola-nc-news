import axios from 'axios';

const articlesApi = axios.create({
	baseURL: 'https://nicola-nc-news.herokuapp.com/api',
});

export const getArticles = (
	topic = null,
	sort_by = null,
	order = null,
	page
) => {
	return articlesApi
		.get('/articles', { params: { topic, sort_by, order, page } })
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
	return articlesApi.get(`/articles/article/${article_id}`).then(({ data }) => {
		return data;
	});
};

export const patchVotesByID = (article_id) => {
	return articlesApi
		.patch(`/articles/${article_id}`, { inc_votes: 1 })
		.then(({ data }) => {
			return data;
		});
};

export const getArticleCommentsByID = (article_id, page) => {
	return articlesApi
		.get(`/articles/${article_id}/comments`, { params: { page } })
		.then(({ data }) => {
			return data;
		});
};

export const getUsers = () => {
	return articlesApi.get('/users').then(({ data }) => {
		return data;
	});
};

export const addComment = (user, newComment, article_id) => {
	return articlesApi
		.post(`/articles/${article_id}/comments`, {
			username: user,
			body: newComment,
		})
		.then(({ data }) => {
			return data;
		});
};

export const deleteCommentByID = (comment_id) => {
	return articlesApi.delete(`/comments/${comment_id}`).then(({ data }) => {
		return data;
	});
};

export const patchCommentVotesByID = (comment_id) => {
	return articlesApi
		.patch(`/comments/${comment_id}`, { inc_votes: 1 })
		.then(({ data }) => {
			return data;
		});
};

export const addArticle = (user, newArticle, topic, title) => {
	return articlesApi
		.post(`/articles`, {
			title: title,
			topic: topic,
			author: user,
			body: newArticle,
		})
		.then(({ data }) => {
			return data;
		});
};

export const deleteArticleByID = (article_id) => {
	return articlesApi.delete(`/articles/${article_id}`).then(({ data }) => {
		return data;
	});
};

export const addTopic = (newTopic, newDescription) => {
	return articlesApi
		.post(`/topics`, {
			slug: newTopic,
			description: newDescription,
		})
		.then(({ data }) => {
			if (data.length === 0) {
				console.log(data);
			}
			return data;
		});
};
