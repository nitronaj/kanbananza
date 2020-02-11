export const CREATE_LIST = 'CREATE_LIST';
export const CARD_MOVE = 'CARD_MOVE';

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

export const moveCardToList = (cardId, originListId, destinationListId) => {
	return {
		type: CARD_MOVE,
		payload:{
			cardId,
			originListId,
			destinationListId
		}
	}
}
