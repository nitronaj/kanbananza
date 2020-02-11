export const CARD_CREATE = 'CARD_CREATE';
export const CARD_DELETE = 'CARD_DELETE';

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
    type: CARD_CREATE,
    payload: {
      card,
      cardId,
      listId,
    },
  };
};

export const removeCard = (cardId, listId) => {
  return {
    type: CARD_DELETE,
    payload: {
      cardId,
      listId,
    },
  };
};
