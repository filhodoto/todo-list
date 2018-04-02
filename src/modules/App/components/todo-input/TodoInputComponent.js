import './todo-input-styles.css';
import * as React from 'react';

export default class TodoInput extends React.Component {

  render() {
	return (
	  <div className="todo-input">
		<input onChange={this.props.handleChange}
			   placeholder="..."
			   type="text"
			   value={this.props.todo}/>
		<button onClick={this.props.handleClickAdd}>Add</button>
	  </div>
	)
  }
}