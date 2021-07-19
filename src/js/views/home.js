import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	const { actions } = useContext(Context);
	const [title, setTitle] = useState("");
	const [border, setBorder] = useState("");
	let history = useHistory();
	return (
		<>
			<div className="text-center mt-2">
				<h1>Welcome to your To-do web application</h1>
				<div className="m-5">
					<h3> Type a title for your to-do list</h3>
					<input
						placeholder="To-do Title"
						onChange={e => setTitle(e.target.value)}
						value={title}
						className={border}
					/>
					<button
						className="btn btn-primary ml-4"
						onClick={() => {
							if (title === "") {
								setBorder("border border-danger");
							} else {
								setBorder("");
								actions.addTitle(title);
								history.push("/todo");
							}
						}}>
						Todos
					</button>
				</div>
			</div>
		</>
	);
};
