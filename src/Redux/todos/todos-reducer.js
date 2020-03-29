import todosActionTypes from './todos-types.js';
import { removeOneTodo } from './todos-utils.js';

const INITIAL_STATE = {
	todosItems: [],
	todoID: -1
}

export const todosReducer = (currentState=INITIAL_STATE, action={}) => {
	
	switch(action.type) {
		case todosActionTypes.ADD_TODO:
			currentState.todoID +=1;
			return {
				...currentState, 
				todosItems:[
					...currentState.todosItems,
					{id: currentState.todoID,value: action.payload}
				]
			}
		case todosActionTypes.DEL_TODO:
			return {...currentState,todosItems:removeOneTodo(currentState.todosItems, action.payload)}
		default:
			return currentState;
		}	
}
