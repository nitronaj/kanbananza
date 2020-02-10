import { combineReducers } from 'redux';
import { listsReducer as lists } from './list-reducer';
import { usersReducer as users } from './user-reducer';
import { cardsReducer as cards } from './card-reducer';

export default combineReducers({
  lists,
  users,
  cards,
});
