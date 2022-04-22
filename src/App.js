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
	return (
		<div className='App'>
			<div className='container'>
				<div className='row'>
					<Header className='App-header' />
				</div>
				<div className='row'>
					<Login />
					<Topics />
				</div>
			</div>

			<Routes>
				<Route path='/' element={<Articles />} />
				<Route path='/articles' element={<Articles />} />
				<Route path='/articles/:topic' element={<Articles />} />

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
