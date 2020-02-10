import { cards as defaultCards } from '../normalized-state';
import { addEntity } from './_utilities';
import { CREATE_CARD } from '../actions/card-actions';

const cardsReducer = (cards = defaultCards, action) => {
  if (action.type ===  CREATE_CARD) {
    const { card, cardId } = action.payload;

    return addEntity(cards, card, cardId);
  }
  return cards;
};

export { cardsReducer };
