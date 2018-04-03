// @flow
import './todo-input-styles.css';
import * as React from 'react';
import { uniqueId } from 'lodash';
import { connect } from 'react-redux';
import { addTodoAction } from '../../actions/todosActions'

type StatePropsInterface = {
  todo: string
};

type DispatchPropsInterface = {
  addTodo: (text: string, id: number) => void
};

type CombinedProps = StatePropsInterface & DispatchPropsInterface;

class TodoInput extends React.Component<CombinedProps, {}> {

  render() {
	return (
	  <div className="todo-input">
		<input placeholder="..."
			   type="text" value={this.props.todo}/>
		<button onClick={this.props.addTodo(this.props.todo, uniqueId())}>Add</button>
	  </div>
	)
  }
}

const mapStateToProps = state => ({
  todo: state.todo
});

const mapDispatchToProps = dispatch => ({
  addTodo: index => dispatch(addTodoAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoInput);