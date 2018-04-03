// @flow
import * as React from 'react';

import TodoList from './components/todo-list/TodoListComponent.js';
import TodoInput from './components/todo-input/TodoInputComponent.js';
import Counter from './components/counter/CounterComponent.js';

/**
 * Main component
 */
export default class App extends React.Component<{}, {}> {

  render() {
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
