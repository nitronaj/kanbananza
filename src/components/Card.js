import React from 'react';
import { MoveCardToListContainer } from '../containers/MoveCardToListContainer';

const Card = ({ card = {}, listId }) => {
  return (
    <article className="Card">
      <h3>{card.title}</h3>
      <div className="Card-description">{card.description}</div>
      <MoveCardToListContainer cardId={card.id} listId={listId} />
    </article>
  );
};

export default Card;
