import { patchCommentVotesByID } from '../../utils/api';
import { useState } from 'react';

const CommentVotes = ({ votes, comment_id }) => {
	const [optomisitcCommentVotes, setOptomisiticCommentVotes] = useState(0);

	const increaseVoteCount = () => {
		setOptomisiticCommentVotes((currVotes) => currVotes);
		patchCommentVotesByID(comment_id)
			.then((data) => {
				console.log(data);
				return data;
			})
			.catch(() => {
				setOptomisiticCommentVotes((currVotes) => currVotes - 1);
			});
	};

	return (
		<div className='CommentVotes'>
			<p className='CommentVotes_count'>
				Votes {votes + optomisitcCommentVotes}
			</p>
			<button onClick={increaseVoteCount} disabled={optomisitcCommentVotes > 0}>
				I agree!! Have a vote
			</button>
		</div>
	);
};

export default CommentVotes;
