import React from "react";
import { Grid, Container } from "@mui/material";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { statesContext } from "../../App";
import { Button } from "react-bootstrap";

import EventCard from "../EventCard/EventCard";

import "./Home.css";

function Home() {
	const { events, loggedIn } = useContext(statesContext);

	return (
		<div className="homeContainer">
			<div className="menu-container mt-3 animate__animated animate__slideInRight">
				{events &&
					events.map((event, i) => (
						<div className="mb-3 mt-5 ">
							<Container className="d-flex align-items-center justify-content-center">
								<EventCard event={event} />
							</Container>
						</div>
					))}
			</div>
			{/* <div className="eventContainer">
				<h2>Party in the mountains!</h2>
				<img
					className="home-image"
					src="https://i.imgur.com/vyGjufO.jpg"
					alt="test image"
				/>
				<h3>DATE:</h3>
				<p>October 12th, 2024</p>
				<h3>TIME:</h3>
				<p>19:00</p>
				<h3>NOTES:</h3>
				<p>
					Don't forget to bring the chips and dip! The bonfire can only go until
					11pm!
				</p>
				<div className="eventButtonContainer">
					<Link to={"/home/edit"}>
						<Button className="eventButtons">Edit</Button>
					</Link>

					<Button className="eventButtons">Delete</Button>
				</div>
			</div>
			<div className="eventContainer">
				<h2>Party in the mountains!</h2>
				<img
					className="home-image"
					src="https://i.imgur.com/vyGjufO.jpg"
					alt="test image"
				/>
				<h3>DATE:</h3>
				<p>October 12th, 2024</p>
				<h3>TIME:</h3>
				<p>19:00</p>
				<h3>NOTES:</h3>
				<p>
					Don't forget to bring the chips and dip! The bonfire can only go until
					11pm!
				</p>
				<div className="eventButtonContainer">
					<Link to={"/home/edit"}>
						<Button className="eventButtons">Edit</Button>
					</Link>

					<Button className="eventButtons">Delete</Button>
				</div>
			</div>
			<div className="eventContainer">
				<h2>Party in the mountains!</h2>
				<img
					className="home-image"
					src="https://i.imgur.com/vyGjufO.jpg"
					alt="test image"
				/>
				<h3>DATE:</h3>
				<p>October 12th, 2024</p>
				<h3>TIME:</h3>
				<p>19:00</p>
				<h3>NOTES:</h3>
				<p>
					Don't forget to bring the chips and dip! The bonfire can only go until
					11pm!
				</p>
				<div className="eventButtonContainer">
					<Link to={"/home/edit"}>
						<Button className="eventButtons">Edit</Button>
					</Link>

					<Button className="eventButtons mt-4">Delete</Button>
				</div>
			</div> */}
		</div>
	);
}

export default Home;
