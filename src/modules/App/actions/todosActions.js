/**
 * Add Todo
 */
export const ADD_TODO = 'ADD_TODO';
export const addTodoAction = (text:string, id:number) => ({
  type: 'ADD_TODO',
  payload: {text, id}
});

/**
 * Delete Todo
 */
export const DELETE_TODO = 'DELETE_TODO';
export const deleteTodoAction = (index:number) => ({
  type: 'DELETE_TODO',
  payload: index
});

/**
 * Update Todo State
 */
export const UPDATE_TODO = 'UPDATE_TODO';
export const updateTodoAction = (text:string) => ({
  type: 'UPDATE_TODO',
  payload: text
});