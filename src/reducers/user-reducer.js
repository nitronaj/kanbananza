import { users as defaultUsers } from '../normalized-state';
import { CREATE_USER } from '../actions/user-actions';
import { addEntity } from './_utilities';

const usersReducer = (users = defaultUsers, action) => {
	if(action.type === CREATE_USER) {
		return addEntity(users, action.payload.user, action.payload.userId);
	}
	return users;
};

export { usersReducer };
