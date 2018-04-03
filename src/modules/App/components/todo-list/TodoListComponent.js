// @flow
import './todo-list-styles.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { deleteTodoAction } from '../../actions/todosActions'

import Todo from './../todo/TodoComponent.js';

/**
 * Setup component types
 */
type StatePropsInterface = {
  todos: Array < {text: string, id: number} >
};

type DispatchPropsInterface = {
  deleteTodo: (number) => void
};

type CombinedProps = StatePropsInterface & DispatchPropsInterface;

class TodoList extends React.Component<CombinedProps,{}> {

  onClickDelete = (index: number) => this.props.deleteTodo(index);

  render() {
	return (
	  <div>
		{
		  this.props.todos.length
			? this.props.todos.map((todo, index) => {
			  return <Todo key={todo.id}
						   text={todo.text}
						   onClickDelete={() => this.onClickDelete(index)}/>
			})
			: 'You\'re all done 🌴'
		}
	  </div>
	)
  }
}

/**
 * Get necessary store data
 */
const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  deleteTodo: index => dispatch(deleteTodoAction(index))
});

/**
 * Export class with store data connected
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);