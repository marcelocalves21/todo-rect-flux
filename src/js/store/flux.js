const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			todoList: []
		},
		actions: {
			addItem: newItem => {
				let newTodoList = getStore().todoList;
				setStore({ todoList: [...newTodoList, newItem] });
			},
			deleteItem: element => {
				let deleteItem = getStore().todoList;
				deleteItem = deleteItem.filter(item => element !== item);
				setStore({ todoList: deleteItem });
			}
		}
	};
};

export default getState;
