const SortButtons = ({ setSortBy, setOrder, order, sortBy }) => {
	return (
		<section className='Button_bar'>
			Sort By:
			<span role='img' aria-label='created at'>
				<button
					type='button'
					className='Order_button'
					onClick={(e) => {
						setSortBy('created_at');
					}}
				>
					⭐️ NEW
				</button>
			</span>
			<span role='img' aria-label='comment count'>
				<button
					type='button'
					className='Order_button'
					onClick={(e) => {
						setSortBy('comment_count');
					}}
				>
					🔥 TOPIC
				</button>
			</span>
			<span role='img' aria-label='votes'>
				<button
					type='button'
					className='Order_button'
					onClick={(e) => {
						setSortBy('votes');
					}}
				>
					👍 VOTES
				</button>
			</span>
			<span role='img' aria-label='ascending'>
				<button
					type='button'
					className='Order_button-arrow'
					onClick={(e) => {
						setOrder('ASC');
					}}
				>
					⬆️
				</button>
			</span>
			<span role='img' aria-label='descending'>
				<button
					type='button'
					className='Order_button-arrow'
					onClick={(e) => {
						setOrder('DESC');
					}}
				>
					⬇️
				</button>
			</span>
		</section>
	);
};

export default SortButtons;
