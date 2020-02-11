import { lists as defaultLists } from '../normalized-state';
import { addIdToChildren, addEntity } from './_utilities';
import { CREATE_CARD } from '../actions/card-actions';
import { CREATE_LIST } from '../actions/list-actions'

const listsReducer = (lists = defaultLists, action) => {
  if (action.type === CREATE_CARD) {
    const { cardId, listId } = action.payload;
    return addIdToChildren(lists, listId, 'cards', cardId);
  }

  if(action.type === CREATE_LIST) {
    const {list, listId} = action.payload;
    return addEntity(lists, list, listId);
  }

  return lists;
};

export { listsReducer };
