import set from 'lodash/fp/set';
import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';



/*
  {
    entities: { ...cards.entities, [cardId]: card },
    ids: [...cards.ids, cardId],
  };
*/
export const addEntity = (state, entity, id) => pipe(
  set(['entities', id], entity),
  set('ids', [...state.ids, id])
)(state)

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
  return set(path, [...children, childId], state)
}