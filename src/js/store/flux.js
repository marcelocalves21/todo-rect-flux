const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			listTitle: "",
			todoList: []
		},
		actions: {
			addTitle: title => (title === "" ? setStore({ listTitle: "No title" }) : setStore({ listTitle: title })),
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
