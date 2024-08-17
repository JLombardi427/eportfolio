// Justin Lombardi
// August 8th, 2024
// Version 3.0

//This component handles the form that will update events.

//Dependencies
import React from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "./EditEvent.css";

function EditEvent(props) {
	const [event, setEvent] = useState(null);
	const { id } = useParams();
	const navigate = useNavigate();

	const getEventDetail = async () => {
		try {
			const res = await fetch(`http://localhost:3002/api/events/${id}`);
			const data = await res.json();
			if (res.status === 200) {
				setEvent(data);
			}
		} catch (error) {
			console.error(error);
		}
	};

	function handleChange(e) {
		setEvent({ ...event, [e.target.name]: e.target.value });
	}

	const deleteEvent = async () => {
		try {
			const res = await fetch(`http://localhost:3002/api/events/${id}`, {
				method: "DELETE",
			});
			if (res.status === 204) {
				navigate("/home");
			} else if (res.status === 403 || 401) {
				alert("You are not authorized to delete this post!");
			}
		} catch (error) {
			console.error(error);
		}
	};

	async function eventEdit(e) {
		e.preventDefault();

		try {
			const res = await fetch(`http://localhost:3002/api/events/${id}`, {
				method: "PUT",
				body: event,
			});
			if (res.status === 200) {
				navigate(`/home`);
			} else if (res.status === 403 || 401) {
				alert("You are not authorized to update this post!");
			}
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getEventDetail();
	}, []);

	if (!event) {
		return null;
	}
	return (
		<div>
			<h2 className="text-center text-warning mt-3">Update an Event</h2>
			<div className="w-75 p-3 mx-auto">
				<Form
					encType="multipart/form-data"
					onSubmit={eventEdit}
					className="edit-event-container">
					<Form.Group controlId="name" className="fields">
						<Form.Label className="text-warning">Name</Form.Label>
						<Form.Control
							required
							autoFocus
							type="text"
							name="name"
							onChange={handleChange}
							value={event.name}
						/>
					</Form.Group>
					<Form.Group controlId="date" className="fields">
						<Form.Label className="text-warning">Date</Form.Label>
						<Form.Control
							type="text"
							name="date"
							onChange={handleChange}
							value={event.date.split("T")[0]}
						/>
					</Form.Group>
					<Form.Group controlId="time" className="fields">
						<Form.Label className="text-warning">time</Form.Label>
						<Form.Control
							type="text"
							name="time"
							onChange={handleChange}
							value={event.time}
						/>
					</Form.Group>
					<Form.Group controlId="notes" className="fields">
						<Form.Label className="text-warning">Special notes</Form.Label>
						<Form.Control
							type="text"
							name="notes"
							onChange={handleChange}
							value={event.notes}
						/>
					</Form.Group>
					<Form.Group controlId="category" className="fields">
						<Form.Label className="text-warning">Category</Form.Label>
						<Form.Control
							as="select"
							name="category"
							onChange={handleChange}
							value={event.category}>
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
							Update
						</Button>
					</div>
				</Form>
				<div className="fields">
					<button className="delete-button" onClick={deleteEvent}>
						DELETE EVENT
					</button>
				</div>
			</div>
		</div>
	);
}

export default EditEvent;
