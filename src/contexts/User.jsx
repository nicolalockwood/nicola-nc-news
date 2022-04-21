import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
	const [user, setUser] = useState('Please log in to comment/add');

	const isLoggedIn = user !== 'Please log in to comment/add';

	return (
		<UserContext.Provider value={{ user, setUser, isLoggedIn }}>
			{props.children}
		</UserContext.Provider>
	);
};
