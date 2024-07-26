import { Link } from "react-router-dom";
import { Card, CardContent } from "@mui/material";
import "./EventCard.css";

function EventCard({ event }) {
	// const { events, setEvents, user, setUser } = useContext(statesContext);

	return (
		<Card elevation={3}>
			<CardContent className="card-container">
				<Link to={`/menu/${event.id}`}>
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
