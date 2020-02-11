import { cards as defaultCards } from '../normalized-state';
import { addEntity, removeEntity } from './_utilities';
import { CARD_CREATE, CARD_DELETE } from '../actions/card-actions';

const cardsReducer = (cards = defaultCards, action) => {
  if (action.type === CARD_CREATE) {
    const { card, cardId } = action.payload;
    return addEntity(cards, card, cardId);
  }

  if (action.type === CARD_DELETE) {
    const { cardId } = action.payload;
    return removeEntity(cards, cardId);
  }

  return cards;
};

export { cardsReducer };
