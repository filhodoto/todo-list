import './todo-styles.css';
import * as React from 'react';

export default class Todo extends React.Component {
  render () {
    const { text, onClickDelete } = this.props;
    return (
      <div className="todo-item">
        {text}
        <span onClick={onClickDelete}>&times;</span>
      </div>
    )
  }
}
