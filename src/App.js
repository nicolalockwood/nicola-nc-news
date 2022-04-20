import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import IndividualArticle from './components/IndividualArticle';
import ArticleByTopic from './components/ArticlebyTopic';
import Login from './components/Login';
import NavBar from './components/NavBar';

function App() {
	return (
		<div className='App'>
			<Header className='App-header' />
			<Login />
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/articles/?topic=topic' element={<ArticleByTopic />} />
				<Route path='/articles/article_id' element={<IndividualArticle />} />
			</Routes>
		</div>
	);
}

export default App;
