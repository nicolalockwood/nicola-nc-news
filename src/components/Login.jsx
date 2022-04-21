import { UserContext } from '../contexts/User';
import { useContext, useEffect, useState } from 'react';
import { getUsers } from '../utils/api';

const Login = () => {
	const [usersList, setUsersList] = useState([]);
	const { user, setUser } = useContext(UserContext);

	useEffect(() => {
		getUsers().then(({ user }) => {
			setUsersList(user);
		});
	}, [user]);

	return (
		<main className='Login'>
			<div className='Login_drop-down'>
				<label>Select User:</label>
				<select onChange={(e) => setUser(e.target.value)}>
					<option>Please log in to comment/add</option>
					{usersList.map((user) => {
						return (
							<option key={user.username} value={user.username}>
								{user.username}
							</option>
						);
					})}
				</select>
			</div>

			<p className='Login_greeting'>Welcome! {user}</p>
		</main>
	);
};

export default Login;
