import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer } from "./user/user-reducer.js";
import { todosReducer } from "./todos/todos-reducer.js";

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user','todos'],
}

const rootReducer = combineReducers({
	user: userReducer,
	todos: todosReducer,
})


export default persistReducer(persistConfig, rootReducer);