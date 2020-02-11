import { lists as defaultLists } from '../normalized-state';
import { addIdToChildren, addEntity, removeIdFromChildren, removeEntity } from './_utilities';
import { CARD_DELETE, CARD_CREATE } from '../actions/card-actions';
import { CARD_MOVE, LIST_CREATE, LIST_DELETE } from '../actions/list-actions';
import { pipe } from 'rxjs';

const listsReducer = (lists = defaultLists, action) => {
  if (action.type === CARD_CREATE) {
    const { cardId, listId } = action.payload;
    return addIdToChildren(lists, listId, 'cards', cardId);
  }

  if (action.type === LIST_CREATE) {
    const { list, listId } = action.payload;
    return addEntity(lists, list, listId);
  }

  if (action.type === CARD_DELETE) {
    const { listId, cardId } = action.payload;
    return removeIdFromChildren(lists, listId, 'cards', cardId);
  }

  if (action.type === LIST_DELETE) {
    const { listId } = action.payload;
    // NOTE: after deleting the list have cards which not assign to any list
    return removeEntity(lists, listId);
  }

  if (action.type === CARD_MOVE) {
    const { cardId, originListId, destinationListId } = action.payload;
    return pipe(
      lists => removeIdFromChildren(lists, originListId, 'cards', cardId),
      lists => addIdToChildren(lists, destinationListId, 'cards', cardId),
    )(lists);
  }

  return lists;
};

export { listsReducer };
