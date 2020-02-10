import { users as defaultUsers } from '../normalized-state';

const usersReducer = (users = defaultUsers, action) => {
	console.log(users, action);
	return users;
};

export { usersReducer };
