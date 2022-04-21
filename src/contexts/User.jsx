import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
	const [user, setUser] = useState('Select User');

	const isLoggedIn = user !== undefined;

	return (
		<UserContext.Provider value={{ user, setUser, isLoggedIn }}>
			{props.children}
		</UserContext.Provider>
	);
};
