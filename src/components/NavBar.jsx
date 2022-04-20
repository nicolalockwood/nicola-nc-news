import { useState } from 'react';
import Topics from './Topics/Topics';

const NavBar = () => {
	const [selectedTopic, setSelectedTopic] = useState('');
	return (
		<main className='NavBar'>
			<Topics />
		</main>
	);
};

export default NavBar;
