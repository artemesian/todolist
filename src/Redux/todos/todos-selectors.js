import { createSelector } from 'reselect';

const selectTodos = state => state.todos;

export const selectTodosItems = createSelector(
	[selectTodos],
	(todos) => todos.todosItems
)

export const selectTodoID = createSelector(
	[selectTodos],
	(todos) => todos.todoID
)
