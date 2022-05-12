import { patchCommentVotesByID } from '../../utils/api';
import { useState } from 'react';

const CommentVotes = ({ votes, comment_id }) => {
	const [optomisitcCommentVotes, setOptomisiticCommentVotes] = useState(0);

	const increaseVoteCount = () => {
		setOptomisiticCommentVotes((currVotes) => currVotes + 1);
		patchCommentVotesByID(comment_id)
			.then((data) => {
				return data;
			})
			.catch(() => {
				setOptomisiticCommentVotes((currVotes) => currVotes - 1);
			});
	};

	return (
		<div className='CommentVotes'>
			<button
				className='CommentVotes_count'
				onClick={increaseVoteCount}
				disabled={optomisitcCommentVotes > 0}
			>
				👍 {votes + optomisitcCommentVotes}
			</button>
		</div>
	);
};

export default CommentVotes;
