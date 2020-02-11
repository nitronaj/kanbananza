import set from 'lodash/fp/set';
import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';


const removeFromArray = (array, target) => array.filter(n => n !== target);

/*
  {
    entities: { ...cards.entities, [cardId]: card },
    ids: [...cards.ids, cardId],
  };
*/
export const addEntity = (state, entity, id) =>
  pipe(set(['entities', id], entity), set('ids', [...state.ids, id]))(state);

/*
  const entities = 	{ ...lists.entities };
  entities[listId] = {
    ...entities[listId],
    cards: [...entities[listId].cards, cardId],
  };

  return {
    ...lists,
    entities,
  };

  OR

  const cards = [...lists.entities[listId].cards, cardId];
  return set(['entities', listId, 'cards'], cards, lists);
*/

export const addIdToChildren = (state, entityId, property, childId) => {
  const path = ['entities', entityId, property];
  const children = get(path)(state);
  return set(path, [...children, childId], state);
};


/* 	const map = new Map(Object.entries(cards.entities))

	map.delete(cardId);
	const entities = Object.fromEntries(map);


	return {
		...cards,
		entities,
		ids: cards.ids.filter(id => id !== cardId)
	} */

export const removeEntity = (state, entityId) => {
	const map = new Map(Object.entries(state.entities));
	map.delete(entityId);
	const entities = Object.fromEntries(map);

	console.log({
		...state,
		entities,
		ids: removeFromArray(state.ids, entityId)
	});


	return {
		...state,
		entities,
		ids: removeFromArray(state.ids, entityId)
	}
}


/* const entities = { ...lists.entities };

    entities[listId] = {
      ...entities[listId],
      cards: entities[listId].cards.filter(id => cardId !== id),
    };
    const state = {
      ...lists,
      entities,
    };

    return addIdToChildren(state, destinationListId, 'cards', cardId) */

/* const cards = [...lists.entities[listId].cards.filter(id => cardId !== id)];
    return pipe(
			set(['entities', listId, 'cards'], cards),
			lists => {
      	return addIdToChildren(lists, destinationListId, 'cards', cardId);
			}
		)({ ...lists });
 */

export const removeIdFromChildren = (state, entityId, property, childId) => {
  const path = ['entities', entityId, property];
  const children = get(path)(state);
  return set(path, removeFromArray(children, childId), state);
};
