import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import "./Home.css";

function Home(props) {
	return (
		<div className="homeContainer">
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
			</div>
		</div>
	);
}

export default Home;
