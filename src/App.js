import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Articles from './components/Articles/Articles';
import IndividualArticle from './components/Articles/IndividualArticle';
import Login from './components/Login';
import Topics from './components/Topics/Topics';
import ErrorPage from './components/ErrorPage';
import { useState } from 'react';

function App() {
	const [articles, setArticles] = useState([]);
	return (
		<div className='App'>
			<Header className='App-header' />
			<Login />
			<Topics />
			<Routes>
				<Route
					path='/'
					element={<Articles articles={articles} setArticles={setArticles} />}
				/>
				<Route
					path='/articles'
					element={<Articles articles={articles} setArticles={setArticles} />}
				/>
				<Route
					path='/articles/:topic'
					element={<Articles articles={articles} setArticles={setArticles} />}
				/>

				<Route
					path='/articles/article/:article_id'
					element={<IndividualArticle />}
				/>
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</div>
	);
}

export default App;
