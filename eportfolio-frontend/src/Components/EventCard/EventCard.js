// Justin Lombardi
// August 8th, 2024
// Version 3.0

//This component handles the container for the events.

//Dependencies
import { Link } from "react-router-dom";
import { Card, CardContent } from "@mui/material";

//Styling
import "./EventCard.css";

function EventCard({ event }) {
	// const { events, setEvents, user, setUser } = useContext(statesContext);
	console.log(event);
	return (
		<Card>
			<CardContent className="card-container">
				<div className="card">
					<img className="card-img-top" src={event.image} alt={event.name} />
					<div className="card-body">
						<p className="card-text">{event.name}</p>
						<p className="card-text">{event.date.split("T")[0]}</p>
						<p className="card-text">{event.time}</p>
						<p className="card-text">{event.notes}</p>
					</div>
					<Link to={`/home/${event._id}/edit`}>
						<div>
							<button>Edit Event</button>
						</div>
					</Link>
					<Link to={`/home/${event._id}/delete`}>
						<div>
							<button>Delete Event</button>
						</div>
					</Link>
				</div>
			</CardContent>
		</Card>
	);
}

export default EventCard;
