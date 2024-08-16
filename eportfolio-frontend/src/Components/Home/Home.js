// Justin Lombardi
// August 8th, 2024
// Version 3.0
// This component handles the main menu for the events.
// This component also handles the filtering of the events and the categories

//Dependencies
import React, { useState } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { statesContext } from "../../App";
import { Button } from "react-bootstrap";

//Components
import EventCard from "../EventCard/EventCard";

//Styling
import "./Home.css";

function Home() {
	// URLs
	const baseUrl = "http://localhost:3002/api/events";

	// constant that holds true or false whether user is logged in or not
	const { loggedIn } = useContext(statesContext);

	//State variables
	const [events, setEvents] = useState([]);
	const [filterEvent, setFilterEvent] = useState("Birthday");
	const [category, setCategory] = useState([
		"Birthday",
		"Anniversary",
		"Sporting Event",
		"Vacation",
		"Other",
	]);

	// Function to get all events from the database
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

	//constant that maps through the categories of events to display in the select element
	const categoryOptions = category.map((category) => category);

	//constant that handles the select element and tracks which option is selected
	const handleCategoryChange = (e) => {
		setFilterEvent(category[e.target.value]);
		console.log(category[e.target.value]);
		console.log(filterEvent);

		//console.log(filteredData);
		// console.log(filterEvent);
	};

	// constant that filters the events based on the category that is chosen
	const filteredData = events.filter((event) =>
		event.category.includes(filterEvent)
	);

	//side effect used to update events when there is a change to the category
	useEffect(() => {
		getEvents();
	}, []);

	return (
		<div className="homeContainer">
			<select
				selected="selected"
				onChange={(e) => handleCategoryChange(e)}
				className="category">
				{categoryOptions.map((category, key) => (
					<option value={key}>{category}</option>
				))}
			</select>
			{filteredData.length === 0 ? (
				<p className="cardContainer">
					Sorry! There are no events in this category yet!{" "}
				</p>
			) : (
				<div>
					<div>
						<div className="cardContainer animate__animated animate__slideInRight">
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
