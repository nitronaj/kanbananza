import { lists as defaultLists } from '../normalized-state';
import { addIdToChildren, addEntity, removeIdFromChildren } from './_utilities';
import { CREATE_CARD } from '../actions/card-actions';
import { CREATE_LIST, CARD_MOVE } from '../actions/list-actions';
import { pipe } from 'rxjs';

const listsReducer = (lists = defaultLists, action) => {
  if (action.type === CREATE_CARD) {
    const { cardId, listId } = action.payload;
    return addIdToChildren(lists, listId, 'cards', cardId);
  }

  if (action.type === CREATE_LIST) {
    const { list, listId } = action.payload;
    return addEntity(lists, list, listId);
	}

	if(action.type === 'REMOVE_CARD') {
		const {listId, cardId} = action.payload;
		return removeIdFromChildren(lists, listId, 'cards', cardId)
	}

	if(action.type === 'REMOVE_LIST') {
		const {listId} = action.payload;
		console.log(action, listId);
	}

	if (action.type === CARD_MOVE) {
		const { cardId, originListId, destinationListId } = action.payload;
		return pipe(
			lists => removeIdFromChildren(lists, originListId, 'cards', cardId),
			lists => addIdToChildren(lists, destinationListId, 'cards', cardId)
		)(lists)
	}

  return lists;
};

export { listsReducer };
