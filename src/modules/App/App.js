// @flow

import * as React from 'react';
// import { uniqueId } from 'lodash';

import TodoList from './components/todo-list/TodoListComponent.js';
import TodoInput from './components/todo-input/TodoInputComponent.js';
import Counter from './components/counter/CounterComponent.js';


export default class App extends React.Component<{}, {}> {

  /**
   *
   */
  constructor (props: any)
  {
	super(props);
  }


  render() {

    // const { todo, todos } = this.state;
    return (
      <div className="todo-list">
        <h1>todos</h1>
        <Counter />
        <TodoList/>
		<TodoInput/>
      </div>
    )
  }
}
