import { useState } from 'react';
import { patchVotesByID } from '../utils/api';

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
			<p className='vote_count'>Votes: {votes + optomisticVotes}</p>
			<button onClick={increaseVoteCount} disabled={optomisticVotes > 0}>
				I Agree!!! Have a vote
			</button>
		</div>
	);
};

export default Votes;
