import { users as defaultUsers } from '../normalized-state';
import { USER_CREATE } from '../actions/user-actions';
import { addEntity } from './_utilities';

const usersReducer = (users = defaultUsers, action) => {
  if (action.type === USER_CREATE) {
    return addEntity(users, action.payload.user, action.payload.userId);
  }
  return users;
};

export { usersReducer };
