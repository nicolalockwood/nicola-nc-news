import { UserContext } from '../contexts/User';
import { useContext, useEffect, useState } from 'react';
import { getUsers } from '../utils/api';

import logo from './Logo.jpeg';

const NavBar = () => {
	const [usersList, setUsersList] = useState([]);
	const { user, setUser } = useContext(UserContext);

	useEffect(() => {
		getUsers().then(({ user }) => {
			setUsersList(user);
		});
	}, [user]);

	return (
		<nav className='navbar navbar-light bg-light'>
			<div className='navbar-brand'>
				<img
					className='d-inline-block align-top'
					width='100'
					height='50'
					src={logo}
					alt='An emoji logo'
				></img>
			</div>
			<form className='form-inline'>
				<label className='my-1 mr-2' htmlFor='inlineFormCustomSelectPref'>
					Login:
				</label>
				<select
					className='custom-select my-1 mr-sm-2'
					id='inlineFormCustomSelectPref'
					onChange={(e) => setUser(e.target.value)}
				>
					<option>Select User</option>
					{usersList.map((user) => {
						return (
							<option key={user.username} value={user.username}>
								{user.username}
							</option>
						);
					})}
				</select>
			</form>
		</nav>
	);
};

export default NavBar;
