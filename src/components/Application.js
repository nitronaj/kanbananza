import React from 'react';

import Users from './Users';
import { ListsContainer } from '../containers/ListsContainer';
import { CreatListContainer } from '../containers/CreateListContainer';

const Application = () => {
  return (
    <main className="Application">
      <Users />
      <section>
        <CreatListContainer />
        <ListsContainer />
      </section>
    </main>
  );
};

export default Application;
