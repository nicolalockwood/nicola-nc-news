const SortButtons = ({ setSortBy, setOrder, order, sortBy }) => {
	return (
		<section className='Button_bar'>
			Sort By:
			<button
				type='button'
				className='Order_button'
				onClick={(e) => {
					setSortBy('created_at');
				}}
			>
				⭐️ NEW
			</button>
			<button
				type='button'
				className='Order_button'
				onClick={(e) => {
					setSortBy('comment_count');
				}}
			>
				🔥 TOPIC
			</button>
			<button
				type='button'
				className='Order_button'
				onClick={(e) => {
					setSortBy('votes');
				}}
			>
				👍 VOTES
			</button>
			<button
				type='button'
				className='Order_button-arrow'
				onClick={(e) => {
					setOrder('ASC');
				}}
			>
				⬆️
			</button>
			<button
				type='button'
				className='Order_button-arrow'
				onClick={(e) => {
					setOrder('DESC');
				}}
			>
				⬇️
			</button>
		</section>
	);
};

export default SortButtons;
