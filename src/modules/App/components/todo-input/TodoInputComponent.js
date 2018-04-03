// @flow
import './todo-input-styles.css';
import * as React from 'react';
import { uniqueId } from 'lodash';
import { connect } from 'react-redux';
import { addTodoAction, updateTodoAction } from '../../actions/todosActions'

type StatePropsInterface = {
  todo: string
};

type DispatchPropsInterface = {
  addTodo: (text: string, id: number) => void,
  updateTodo: (text: string) => void
};

type CombinedProps = StatePropsInterface & DispatchPropsInterface;

class TodoInput extends React.Component<CombinedProps, {}> {

  handleChange = (event:SyntheticEvent<HTMLButtonElement>): void => {
	this.props.updateTodo(event.currentTarget.value);
  };

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

const mapStateToProps = state => ({
  todo: state.todo
});

const mapDispatchToProps = dispatch => ({
  addTodo: (text, id) => dispatch(addTodoAction(text, id)),
  updateTodo: (text) => dispatch(updateTodoAction(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoInput);