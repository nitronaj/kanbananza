import { cards as defaultCards } from '../normalized-state';
import { addEntity, removeEntity } from './_utilities';
import { CREATE_CARD, REMOVE_CARD } from '../actions/card-actions';

const cardsReducer = (cards = defaultCards, action) => {
  if (action.type ===  CREATE_CARD) {
    const { card, cardId } = action.payload;
    return addEntity(cards, card, cardId);
	}

	if(action.type === REMOVE_CARD) {
		const {cardId} = action.payload;
		return removeEntity(cards, cardId)
	}


  return cards;
};

export { cardsReducer };
