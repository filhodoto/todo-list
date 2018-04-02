// @flow

import * as React from 'react';

type PropsInterface = {
    todosLength: number
};

export default class Counter extends React.Component<PropsInterface, {}> {
  render () {
    return <p><span id="counter">{this.props.todosLength}</span> remaining</p>
  }
}
