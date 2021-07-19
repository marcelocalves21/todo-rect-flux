const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			listTitle: "No Title",
			todoList: [],
			checkItem: "",
			border: ""
		},
		actions: {
			addTitle: title =>
				title === ""
					? setStore({ border: "1px solid red" })
					: setStore({ listTitle: title }) && setStore({ border: "" }),
			addItem: newItem => {
				let newTodoList = getStore().todoList;
				setStore({ todoList: [...newTodoList, newItem] });
			},
			deleteItem: element => {
				let deleteItem = getStore().todoList;
				deleteItem = deleteItem.filter(item => element !== item);
				setStore({ todoList: deleteItem });
			},
			deleteList: () => {
				setStore({ todoList: [] });
			}
		}
	};
};

export default getState;
