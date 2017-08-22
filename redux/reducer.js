function getId(state){
	return state.todos.reduce((maxId, todo) => {
		return Math.max(todo.id, maxId)
	}, -1) + 1;
}

export default function reducer(state, action) {
	switch (action.type) {
		case 'ADD_TODO':
			//spread syntax, assign function to create a new object (pure function)
			return Object.assign({}, state, {
				todos: [{
					text: action.text,
					completed: false,
					id: getId(state)
				}, ...state.todos]
			})
		default:
			return state;
	}
}