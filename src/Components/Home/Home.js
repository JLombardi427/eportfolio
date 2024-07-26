import React, { useState } from "react";
import axios from "axios";
import { Grid, Container } from "@mui/material";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { statesContext } from "../../App";
import { Button } from "react-bootstrap";

import EventCard from "../EventCard/EventCard";

import "./Home.css";

function Home() {
	// URLs
	const baseUrl = "http://localhost:3002/api/events";
	const { loggedIn } = useContext(statesContext);
	const [events, setEvents] = useState([]);
	const [filterEvent, setFilterEvent] = useState("");

	const [category, setCategory] = useState([
		"Birthday",
		"Anniversary",
		"Sporting Event",
		"Other",
	]);

	// Get Events api call function
	const getEvents = async () => {
		try {
			const res = await axios.get(baseUrl);
			// console.log(res);
			setEvents(res.data);

			// console.log(events);
		} catch (error) {
			console.log(error);
		}
	};

	const categoryOptions = category.map((category) => category);

	const handleCategoryChange = (e) => {
		setFilterEvent(category[e.target.value]);
		console.log(category[e.target.value]);
		console.log(filterEvent);

		//console.log(filteredData);
		// console.log(filterEvent);
	};

	const filteredData = events.filter((event) =>
		event.category.includes(filterEvent)
	);

	useEffect(() => {
		getEvents();
	}, []);

	return (
		<div className="homeContainer">
			<select onChange={(e) => handleCategoryChange(e)}>
				{categoryOptions.map((category, key) => (
					<option value={key}>{category}</option>
				))}
			</select>
			{filteredData.length === 0 ? (
				<p>Sorry! There are no events in this category yet! </p>
			) : (
				<div>
					<p>{filteredData[0].category}</p>
					<div className="cardContainer">
						<div className="animate__animated animate__slideInRight">
							{filteredData.length !== 0
								? filteredData.map((event, i) => {
										return (
											<div>
												<Container>
													<EventCard event={event} key={i} />
												</Container>
											</div>
										);
								  })
								: events.map((event, i) => {
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
				</div>
			)}
		</div>
	);
}

export default Home;
