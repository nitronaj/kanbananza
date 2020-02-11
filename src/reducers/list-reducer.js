import { lists as defaultLists } from '../normalized-state';
import { addIdToChildren, addEntity, moveChildToEntity } from './_utilities';
import { CREATE_CARD } from '../actions/card-actions';
import { CREATE_LIST, MOVE_CARD_TO_LIST } from '../actions/list-actions';

const listsReducer = (lists = defaultLists, action) => {
  if (action.type === CREATE_CARD) {
    const { cardId, listId } = action.payload;
    return addIdToChildren(lists, listId, 'cards', cardId);
  }

  if (action.type === CREATE_LIST) {
    const { list, listId } = action.payload;
    return addEntity(lists, list, listId);
  }

  if (action.type === MOVE_CARD_TO_LIST) {
    const { cardId, listId, destinationListId } = action.payload;

    return moveChildToEntity(lists, listId, 'cards', cardId, destinationListId);
  }

  return lists;
};

export { listsReducer };
