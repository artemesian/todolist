export const removeOneTodo = ( todosItems, id ) => {

		return todosItems.filter( todoItem => todoItem.id !== id  )
}
