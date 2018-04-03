// @flow
import './todo-input-styles.css';
import * as React from 'react';
import { uniqueId } from 'lodash';
import { connect } from 'react-redux';
import { addTodoAction, updateTodoAction } from '../../actions/todosActions'

/**
 * Setup component types
 */
type StatePropsInterface = {
  todo: string
};

type DispatchPropsInterface = {
  addTodo: (text: string, id: number) => void,
  updateTodo: (text: string) => void
};

type CombinedProps = StatePropsInterface & DispatchPropsInterface;

class TodoInput extends React.Component<CombinedProps, {}> {

  /**
   * Update when input is changed
   */
  handleChange = (event:SyntheticEvent<HTMLButtonElement>): void => {
	this.props.updateTodo(event.currentTarget.value);
  };

  /**
   * Handle Add btn click
   */
  handleClickAdd = (): void => {
	this.props.addTodo(this.props.todo, uniqueId())
  };

  render() {
	return (
	  <div className="todo-input">
		<input onChange={this.handleChange}
			   placeholder="..."
			   type="text" value={this.props.todo}/>
		<button onClick={this.handleClickAdd}>Add</button>
	  </div>
	)
  }
}

/**
 * Get necessary store data
 */
const mapStateToProps = state => ({
  todo: state.todo
});

const mapDispatchToProps = dispatch => ({
  addTodo: (text, id) => dispatch(addTodoAction(text, id)),
  updateTodo: (text) => dispatch(updateTodoAction(text))
});

/**
 * Export class with store data connected
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoInput);