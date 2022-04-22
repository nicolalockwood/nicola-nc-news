import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Articles from './components/Articles';
import IndividualArticle from './components/IndividualArticle';
import Login from './components/Login';
import NavBar from './components/NavBar';

function App(props) {
	const { user, setUser, isLoggedIn } = props;
	return (
		<div className='App'>
			<Header className='App-header' />
			<Login />
			<NavBar />
			<Routes>
				<Route path='/' element={<Articles />} />
				<Route path='/articles' element={<Articles />} />
				<Route path='/articles/:topic/:sort_by/:order' element={<Articles />} />

				<Route
					path='/articles/article/:article_id'
					element={<IndividualArticle />}
				/>
			</Routes>
		</div>
	);
}

export default App;
