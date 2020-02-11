import set from 'lodash/fp/set';
import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';

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

export const moveChildToEntity = (state, entityId, property, childId, destinationEntityId) => {
  const path = ['entities', entityId, property];
  const children = get(path)(state);

  return pipe(
    set(
      path,
      children.filter(id => childId !== id),
    ),
    state => {
      return addIdToChildren(state, destinationEntityId, property, childId);
    },
  )(state);
};
