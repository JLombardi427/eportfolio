import { useContext } from "react";
import { statesContext } from "../../App";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function AddEvent(props) {
	const { events, setEvents, user, setUser, userInfo, loggedIn } =
		useContext(statesContext);
	const eventData = {
		name: "",
		date: "",
		time: "",
		image: "",
		notes: "",
		category: "",
	};

	const navigate = useNavigate();
	const [newEvent, setNewEvent] = useState(eventData);

	function handleChange(event) {
		setNewEvent((newEvents) => {
			return { ...newEvents, [event.target.id]: event.target.value };
		});
	}

	async function createEvent(event) {
		event.preventDefault();
		const data = new FormData(event.target);
		try {
			const res = await fetch("http://localhost:3002/api/events", {
				method: "POST",
				body: data,
				headers: {
					Authorization: `Token ${localStorage.getItem("token")}`,
				},
			});
			if (res.status === 201) {
				navigate("/home");
			}
		} catch (error) {
			console.error(error);
		}
	}

	// if (!loggedIn) {
	// 	return <Navigate to="/login" />;
	// }

	return (
		<div>
			<h2 className="text-center text-warning mt-3">Add an Event</h2>
			<div className="w-75 p-3 mx-auto">
				<Form onSubmit={createEvent} encType="multipart/form-data">
					<Form.Group controlId="name">
						<Form.Label className="text-warning">Event Name</Form.Label>
						<Form.Control required autoFocus type="text" name="name" />
					</Form.Group>
					<Form.Group controlId="Date">
						<Form.Label className="text-warning">Date</Form.Label>
						<Form.Control type="date" name="Date" />
					</Form.Group>
					<Form.Group controlId="time">
						<Form.Label className="text-warning">Time</Form.Label>
						<Form.Control type="text" name="time" />
					</Form.Group>
					<Form.Group controlId="special_notes">
						<Form.Label className="text-warning">Special notes</Form.Label>
						<Form.Control type="text" name="special_notes" />
					</Form.Group>

					<Form.Group controlId="category">
						<Form.Label className="text-warning">Category</Form.Label>

						<select
							class="form-select form-select-sm"
							aria-label=".form-select-sm example">
							<option selected>Select event category</option>
							<option value="Birthday">Birthday</option>
							<option value="Anniversary">Anniversary</option>
							<option value="Other">Other</option>
						</select>
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
