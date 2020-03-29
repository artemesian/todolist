import todosActionTypes from './todos-types.js';

export const addTodo = todo => ({
	type: todosActionTypes.ADD_TODO,
	payload: todo
})

export const delFromID = id => ({
	type: todosActionTypes.DEL_TODO,
	payload: id
})
