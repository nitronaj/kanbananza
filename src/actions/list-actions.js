export const LIST_CREATE = 'LIST_CREATE';
export const CARD_MOVE = 'CARD_MOVE';
export const LIST_DELETE = 'LIST_DELETE';

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
    type: LIST_CREATE,
    payload: {
      list,
      listId,
    },
  };
};

export const moveCardToList = (cardId, originListId, destinationListId) => {
  return {
    type: CARD_MOVE,
    payload: {
      cardId,
      originListId,
      destinationListId,
    },
  };
};

export const removeList = listId => {
  return {
    type: LIST_DELETE,
    payload: {
      listId,
    },
  };
};
