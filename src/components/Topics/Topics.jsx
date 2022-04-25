import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTopics } from '../../utils/api';
import PostTopic from './PostTopic';

const Topics = () => {
	const [topics, setTopics] = useState([]);
	const [err, setErr] = useState(null);
	useEffect(() => {
		getTopics()
			.then(({ topics }) => {
				setTopics(topics);
			})
			.catch((err) => {
				setErr({ err });
			});
	}, [topics]);

	if (err) {
		return <p>Issue loading topics</p>;
	}

	return (
		<main>
			<div>
				<ul className='nav nav-tabs' id='myTab' role='tablist'>
					<li className='nav-item' key='All articles'>
						<Link className='nav-link active' to={'/articles'}>
							All articles
						</Link>
					</li>
					{topics.map((item) => {
						return (
							<li className='nav-item' key={item.slug} value={item.slug}>
								<Link className='nav-link active' to={`/articles/${item.slug}`}>
									{item.slug}
								</Link>
							</li>
						);
					})}
					<li>
						{' '}
						<PostTopic setTopics={setTopics} />
					</li>
				</ul>
			</div>
		</main>
	);
};
export default Topics;
