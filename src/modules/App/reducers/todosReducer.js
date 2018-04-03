// @flow
import { uniqueId } from 'lodash';

import {
  ADD_TODO,
  DELETE_TODO,
} from "../actions/todosActions";


/**
 * Interface for todosReducer state
 */
type todosReducerStateInterface = {
  todo: string,
  todos: Array<{text: string, id: number}>
};

/**
 * The state upon instantiation
 */
const initialState: todosReducerStateInterface = {
  todo: '',
  todos: [ { text: 'Add your first todo' , id: uniqueId()} ]
};


const todosReducer = (
  state: todosReducerStateInterface = initialState,
  action: any
) : any => {
  switch (action.type) {
	case ADD_TODO:
	  return {
		...state,
	    todos: [
	      ...state.todos, {
		  	text: action.payload,
			id: 1 //TODO Make this unique value
		  }
		]
	  }
	case DELETE_TODO:
	  return {
		...state,
		todos: [
		  ...state.todos.slice(0, action.payload),
		  ...state.todos.slice(action.payload + 1)
		]
	  }
  }
}

export default todosReducer;