// @flow

import * as React from 'react';
import { connect } from 'react-redux';

/**
 * Setup component types
 */
type StatePropsInterface = {
    todosLength: number
};

class Counter extends React.Component<StatePropsInterface, {}> {
  render () {
    return <p><span id="counter">{this.props.todosLength}</span> remaining</p>
  }
}

/**
 * Get necessary store data
 */
const mapStateToProps = state => ({
  todosLength: state.todos.length
});

/**
 * Export class with store data connected
 */
export default connect(
  mapStateToProps
)(Counter);