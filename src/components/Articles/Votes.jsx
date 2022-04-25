import { useState } from 'react';
import { patchVotesByID } from '../../utils/api';

const Votes = ({ votes, article_id }) => {
	const [optomisticVotes, setOptomisticVotes] = useState(0);

	const increaseVoteCount = () => {
		setOptomisticVotes((currVotes) => currVotes + 1);
		patchVotesByID(article_id)
			.then((data) => {
				return data;
			})
			.catch(() => {
				setOptomisticVotes((currVotes) => currVotes - 1);
			});
	};

	return (
		<div className='votes'>
			<button
				className='articleVote_count'
				onClick={increaseVoteCount}
				disabled={optomisticVotes > 0}
			>
				👍{votes + optomisticVotes}
			</button>
		</div>
	);
};

export default Votes;
