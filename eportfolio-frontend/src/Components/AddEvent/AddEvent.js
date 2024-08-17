// Justin Lombardi
// August 8th, 2024
// Version 3.0

//This component handles the form that adds events to the database

//Dependencies
import { useContext } from "react";
import { statesContext } from "../../App";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";

import "./AddEvent.css";

function AddEvent(props) {
	const { events, setEvents, user, setUser, userInfo, loggedIn } =
		useContext(statesContext);
	const eventData = {
		name: "",
		date: "",
		time: "",
		image: "https://i.imgur.com/kxu08eF.jpg",
		notes: "",
		category: "",
	};

	const navigate = useNavigate();
	const [newEvent, setNewEvent] = useState(eventData);

	function handleChange(event) {
		setNewEvent((newEvents) => {
			return { ...newEvents, [event.target.name]: event.target.value };
		});
	}

	async function createEvent(event) {
		console.log(newEvent);
		try {
			const res = await fetch("http://localhost:3002/api/events", {
				method: "POST",
				body: JSON.stringify(newEvent),
				headers: {
					"Content-Type": "application/json",
				},
			});
			console.log(res);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div>
			<h2 className="text-center text-warning mt-3">Add an Event</h2>
			<div className="w-75 p-3 mx-auto ">
				<Form
					onSubmit={createEvent}
					encType="multipart/form-data"
					className="add-event-container">
					<Form.Group controlId="name" className="fields">
						<Form.Label className="text-warning">Event Name</Form.Label>
						<Form.Control
							required
							autoFocus
							type="text"
							name="name"
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group controlId="date" className="fields">
						<Form.Label className="text-warning">Date</Form.Label>
						<Form.Control type="date" name="date" onChange={handleChange} />
					</Form.Group>
					<Form.Group controlId="time" className="fields">
						<Form.Label className="text-warning">Time</Form.Label>
						<Form.Control type="text" name="time" onChange={handleChange} />
					</Form.Group>
					<Form.Group controlId="notes" className="fields">
						<Form.Label className="text-warning">Special notes</Form.Label>
						<Form.Control type="text" name="notes" onChange={handleChange} />
					</Form.Group>

					<Form.Group controlId="category" className="fields">
						<Form.Label className="text-warning">Category</Form.Label>
						<Form.Control as="select" name="category" onChange={handleChange}>
							<option selected="defaultValue">Select event category</option>
							<option value="Birthday">Birthday</option>
							<option value="Anniversary">Anniversary</option>
							<option value="Sporting Event">Sporting Event</option>
							<option value="Vacation ">Vacation</option>
							<option value="Other">Other </option>
						</Form.Control>
					</Form.Group>
					<div className="text-center">
						<Button className="mt-4" type="submit">
							Add
						</Button>
					</div>
				</Form>
			</div>
		</div>
	);
}

export default AddEvent;
