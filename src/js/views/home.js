import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
	<>
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
		</div>
		<div>
			<Link to="/todo">
				<button className="btn btn-primary">Todos</button>
			</Link>
		</div>
	</>
);
