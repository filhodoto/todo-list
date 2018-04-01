import './styles.css';

import * as React from 'react';
import { render } from 'react-dom';

import App from './App';

const rootDiv = document.createElement('div');
rootDiv.id = 'root';

document.body.appendChild(rootDiv);

render(<App />, document.querySelector('#root'));
