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

	return (
		<Card>
			<CardContent className="card-container">
				<Link to={`/home/${event.id}`}>
					<div className="card">
						<img className="card-img-top" src={event.image} alt={event.name} />
						<div className="card-body">
							<p className="card-text">{event.name}</p>
						</div>
					</div>
				</Link>
			</CardContent>
		</Card>
	);
}

export default EventCard;
