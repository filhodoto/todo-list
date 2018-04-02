// @flow

import * as React from 'react';
import { uniqueId } from 'lodash';

import TodoList from './components/todo-list/TodoListComponent.js';
import TodoInput from './components/todo-input/TodoInputComponent.js';
import Counter from './components/counter/CounterComponent.js';


type StateInterface = {
    todo: string,
    todos: Array<{text: string, id: number}>
};

export default class App extends React.Component<{}, StateInterface> {

  state: StateInterface = {
    todo: '',
    todos: [ { text: 'Add your first todo' , id: uniqueId()} ]
  };

  handleChange = (event:SyntheticEvent<HTMLButtonElement>): void => this.setState({ todo: event.currentTarget.value });

  handleClickAdd = (): void => {
    const { todo, todos } = this.state;
    todo && this.setState({ todos: [ ...todos, { text: todo, id: uniqueId()} ] });
  };

  handleClickDelete = (index:number): void => {
    console.log(`Deleting todo number ${index}`);
    const { todos } = this.state;
    this.setState({ todos: [
      ...todos.slice(0, index),
      ...todos.slice(index + 1)
    ]});
  };

  render() {

    const { todo, todos } = this.state;
    return (
      <div className="todo-list">
        <h1>todos</h1>
        <Counter todosLength={todos.length} />
        <TodoList todos={todos} handleClickDelete={this.handleClickDelete}/>
        <TodoInput handleChange={this.handleChange} handleClickAdd={this.handleClickAdd} todo={todo}/>
      </div>
    )
  }
}
