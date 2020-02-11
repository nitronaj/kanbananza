export const CREATE_CARD = 'CREATE_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';

const defaultCardData = {
  title: '',
  description: '',
  assignedTo: '',
};

export const createCard = (listId, cardData) => {
  const cardId = Date.now().toString();
  const card = {
    id: cardId,
    ...defaultCardData,
    ...cardData,
  };

  return {
    type: CREATE_CARD,
    payload: {
      card,
      cardId,
      listId,
    },
  };
};

export const removeCard = (cardId, listId) => {
  return {
    type: REMOVE_CARD,
    payload: {
      cardId,
      listId,
    },
  };
};
