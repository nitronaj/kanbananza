import React from 'react';
import { ListContainer } from '../containers/ListContainer';

const Lists = ({ lists = [] }) => {
  return (
    <section className="Lists">
      {lists.map((id) => (
        <ListContainer id={id}/>
      ))}
    </section>
  );
};

export default Lists;
