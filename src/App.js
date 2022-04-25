import { Route, Routes } from 'react-router-dom';
import './App.css';

import Articles from './components/Articles/Articles';
import IndividualArticle from './components/Articles/IndividualArticle';

import Topics from './components/Topics/Topics';
import ErrorPage from './components/ErrorPage';
import NavBar from './components/NavBar';

function App() {
	return (
		<div className='App'>
			<div className='container'>
				<div className='row'>
					<NavBar />
				</div>
				<div className='row'>
					<Topics />
				</div>
				<div className='row'>
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
			</div>
		</div>
	);
}

export default App;
