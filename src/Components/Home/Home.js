import React, { useState } from "react";
import { Grid, Container } from "@mui/material";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { statesContext } from "../../App";
import { Button } from "react-bootstrap";

import EventCard from "../EventCard/EventCard";

import "./Home.css";

function Home() {
	const { events, loggedIn } = useContext(statesContext);
	const [filter, setFilter] = useState([
		"All",
		"Birthday",
		"Anniversary",
		"Other",
	]);
	const [counter, setCounter] = useState(1);

	const categoryOptions = filter.map((category) => category);
	const handleCategoryChange = (e) => {
		console.log(filter[e.target.value]);

		if (filter[e.target.value] === "Birthday") {
			setCounter(2);
			console.log(counter);
		} else if (filter[e.target.value] === "Anniversary") {
			setCounter(3);
			console.log(counter);
		} else if (filter[e.target.value] === "Other") {
			setCounter(4);
			console.log(counter);
		} else {
			setCounter(1);
			console.log(counter);
		}
	};

	useEffect(() => {}, []);

	return (
		<div className="homeContainer">
			<select onChange={(e) => handleCategoryChange(e)}>
				<option>Select event to list...</option>
				{categoryOptions.map((category, key) => (
					<option value={key}>{category}</option>
				))}
			</select>
			<div className="menu-container mt-3 animate__animated animate__slideInRight">
				{events &&
					events.map((event, i) => {
						if (counter === 1)
							return (
								<div className="mb-3 mt-5 ">
									<Container className="d-flex align-items-center justify-content-center">
										<EventCard event={event} key={i} />
									</Container>
								</div>
							);
					})}
			</div>
		</div>
	);
}

export default Home;
