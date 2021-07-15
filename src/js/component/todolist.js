import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const TodoList = () => {
	const { store, actions } = useContext(Context);
	const [todo, setTodo] = useState("");
	return (
		<div className="container container-fluid">
			<h1 className="text-center">todos</h1>
			<div className="border text-center ">
				<input placeholder="No tasks, add a task" onChange={e => setTodo(e.target.value)} value={todo} />
				<button
					className="btn btn-success"
					onClick={() => {
						actions.addItem(todo);
						setTodo("");
					}}>
					Add
				</button>
				{store.todoList.map((element, index) => (
					<div key={index} className="border-top border-bottom text-secondary text-center ">
						{element}
						<a className="btn btn-danger" onClick={() => actions.deleteItem(element)}>
							delete
						</a>
					</div>
				))}
				<footer>Item(s) Left {store.todoList.length}</footer>
			</div>
			<div>
				<Link to="/">
					<button className="btn btn-secondary">Go back</button>
				</Link>
			</div>
		</div>
	);
};

export default TodoList;
