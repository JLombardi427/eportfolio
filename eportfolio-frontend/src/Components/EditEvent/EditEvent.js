// Justin Lombardi
// August 8th, 2024
// Version 3.0

//This component handles the form that will update events.

//Dependencies
import React from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function EditEvent(props) {
	return (
		<div>
			<h2 className="text-center text-warning mt-3">Update an Event</h2>
			<div className="w-75 p-3 mx-auto">
				<Form encType="multipart/form-data">
					<Form.Group controlId="name">
						<Form.Label className="text-warning">Name</Form.Label>
						<Form.Control required autoFocus type="text" name="name" />
					</Form.Group>
					<Form.Group controlId="Date">
						<Form.Label className="text-warning">Date</Form.Label>
						<Form.Control type="text" name="Date" />
					</Form.Group>
					<Form.Group controlId="time">
						<Form.Label className="text-warning">time</Form.Label>
						<Form.Control type="text" name="time" />
					</Form.Group>
					<Form.Group controlId="special_notes">
						<Form.Label className="text-warning">Special notes</Form.Label>
						<Form.Control type="text" name="special_notes" />
					</Form.Group>
					<Form.Group controlId="photo">
						<Form.Label className="text-warning">Photo</Form.Label>
						<Form.Control
							type="file"
							name="photo"
							accept="image/*"></Form.Control>
					</Form.Group>
					<div className="text-center">
						<Button className="mt-4" type="submit">
							Update
						</Button>
					</div>
				</Form>
			</div>
		</div>
	);
}

export default EditEvent;
