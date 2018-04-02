import * as React from 'react';

export default class Counter extends React.Component {
  render () {
    return <p><span id="counter">{this.props.todosLength}</span> remaining</p>
  }
}
