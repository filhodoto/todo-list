// @flow
import './styles.css';

import * as React from 'react';
import { render } from 'react-dom';

import App from './App';

const rootDiv = document.createElement('div');
rootDiv.id = 'root';

document.body.appendChild(rootDiv);

const rootEl:HTMLElement = document.getElementById("#root");

render(<App />, rootEl);
