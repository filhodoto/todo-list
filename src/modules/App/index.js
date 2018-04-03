
import './styles.css';

import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import todosReducer from './reducers/todosReducer';

import App from './App';


/**
 * Create Root DOM element
 */
const rootDiv = document.createElement('div');
rootDiv.id = 'root';
document.body.appendChild(rootDiv);

/**
 * Create Redux Store
 */
const store = createStore(
  todosReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store);
/**
 * Render the application in the root element (#root)
 */
render(
  <Provider store={store}>
	<App />
  </Provider>, document.getElementById('root')
);

