/**
 * Add Todo
 */
export const ADD_TODO = 'ADD_TODO';
export const addTodoAction = (todo:string) => ({
  type: 'ADD_TODO',
  payload: todo
});

/**
 * Delete Todo
 */
export const DELETE_TODO = 'DELETE_TODO';
export const deleteTodoAction = (index:number) => ({
  type: 'DELETE_TODO',
  payload: index
});
//
// /**
//  * Change Todo State
//  */
// export const DELETE_TODO = (index:number) => ({
//   type: 'DELETE_TODO',
//   payload: index
// });