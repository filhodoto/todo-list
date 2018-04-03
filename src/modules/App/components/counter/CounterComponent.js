// @flow

import * as React from 'react';
import { connect } from 'react-redux';

type StatePropsInterface = {
    todosLength: number
};

class Counter extends React.Component<StatePropsInterface, {}> {
  render () {
    return <p><span id="counter">{this.props.todosLength}</span> remaining</p>
  }
}

const mapStateToProps = state => ({
  todosLength: state.todos.length
});

export default connect(
  mapStateToProps
)(Counter);