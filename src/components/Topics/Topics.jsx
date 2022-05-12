import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTopics } from '../../utils/api';
import PostTopic from './PostTopic';

const Topics = () => {
	const [topics, setTopics] = useState([]);
	const [err, setErr] = useState(null);
	const [hidePost, setHidePost] = useState(true);

	useEffect(() => {
		getTopics()
			.then(({ topics }) => {
				topics.push({ slug: '+' });
				setTopics(topics);
			})
			.catch((err) => {
				setErr({ err });
			});
	}, []);

	const handleClick = () => {
		setHidePost(hidePost ? false : true);
	};

	const handleClick = () => {
		setHidePost(hidePost ? false : true);
	};

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
						if (!item.description) {
							return (
								<li className='nav-item' key={item.slug} value={item.slug}>
									<button className='nav-link active' onClick={handleClick}>
										{item.slug}
									</button>
								</li>
							);
						} else {
							return (
								<li className='nav-item' key={item.slug} value={item.slug}>
									<Link
										className='nav-link active'
										to={`/articles/${item.slug}`}
									>
										{item.slug}
									</Link>
								</li>
							);
						}
					})}
				</ul>
			</div>
			<div>
				<PostTopic setTopics={setTopics} hidePost={hidePost} />
			</div>
		</main>
	);
};
export default Topics;
