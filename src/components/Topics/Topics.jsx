import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTopics } from '../../utils/api';

const Topics = () => {
	const [topics, setTopics] = useState([]);
	const [err, setErr] = useState(null);

	useEffect(() => {
		getTopics()
			.then(({ topics }) => {
				setTopics(topics);
			})
			.catch((err) => {
				setErr('Topic not found, please add and try again');
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
					<li key='All articles'>
						<Link to={'/articles'}>All articles</Link>
					</li>
				</ul>
			</div>
		</main>
	);
};
export default Topics;
