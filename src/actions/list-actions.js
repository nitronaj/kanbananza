export const CREATE_LIST = 'CREATE_LIST';
export const MOVE_CARD_TO_LIST = 'MOVE_CARD_TO_LIST';

const defaultListData = {
  title: '',
  cards: [],
};

export const createList = listData => {
  const listId = Date.now().toString();
  const list = {
    id: listId,
    ...defaultListData,
    ...listData,
  };

  return {
    type: CREATE_LIST,
    payload: {
      list,
      listId,
    },
  };
};

export const moveCardToList = (cardId, listId, destinationListId) => {
	return {
		type: MOVE_CARD_TO_LIST,
		payload:{
			cardId,
			listId,
			destinationListId
		}
	}
}
