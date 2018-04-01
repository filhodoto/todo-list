import './todo-styles.css';
import * as React from 'react';

export default class Todo extends React.Component {
  render () {
    return (
      <div className="todo-item">
        {this.props.text}
        <span onClick={this.props.onClickDelete}>&times;</span>
      </div>
    )
  }
}
