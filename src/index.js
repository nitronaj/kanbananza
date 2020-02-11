import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Application from './components/Application';
import rootReducer from './reducers';

import './index.scss';

const store = createStore(rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true, traceLimit: 25 })
);

const App = () => (
  <Provider store={store}>
    <Application />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
