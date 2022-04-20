import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTopics } from '../../utils/api';

const Topics = () => {
	const [topics, setTopics] = useState([]);

	useEffect(() => {
		getTopics().then(({ topics }) => {
			setTopics(topics);
		});
	}, []);

	return (
		<main>
			<div>
				<ul className='topic__list'>
					{topics.map((item) => {
						return (
							<li key={item.slug} value={item.slug}>
								<Link to={`/articles/${item.slug}`}>{item.slug}</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</main>
	);
};
export default Topics;
