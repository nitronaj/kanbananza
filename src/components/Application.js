import React from 'react';

import { ListsContainer } from '../containers/ListsContainer';
import { CreatListContainer } from '../containers/CreateListContainer';
import { UsersContainer } from '../containers/UsersContainer';

const Application = () => {
  return (
    <main className="Application">
      <UsersContainer />
      <section>
        <CreatListContainer />
        <ListsContainer />
      </section>
    </main>
  );
};

export default Application;
