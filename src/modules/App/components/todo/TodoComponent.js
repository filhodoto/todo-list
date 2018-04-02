// @flow

import './todo-styles.css';
import * as React from 'react';

type PropsInterface = {
  text: string,
  onClickDelete: () => void
};

export default class Todo extends React.Component<PropsInterface, {}> {

  render () {
    return (
      <div className="todo-item">
        {this.props.text}
        <span onClick={this.props.onClickDelete}>&times;</span>
      </div>
    )
  }
}
