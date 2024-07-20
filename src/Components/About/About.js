import React, { useRef } from "react";
import { Button } from "react-bootstrap";

import "./About.css";

function About(props) {
	return (
		<div className="about-container text-warning">
			<h3 className="text-warning">
				We always want you to feel like a regular!{" "}
			</h3>
			<div className="photo-div">
				<div>
					<a
						href="https://www.linkedin.com/in/justin-lombardi/"
						target="_blank"
						rel="noreferrer">
						<img
							src="https://i.imgur.com/qT5xs6W.jpg"
							alt="justin"
							className="img-about"></img>
					</a>
				</div>
			</div>
			<div className="about-details text-warning">
				<p className="about-p">
					Calen-Dos is a program that allows users to have fun with their
					calendar updates!{" "}
				</p>
				<p className="about-p">
					Simply go to the "Add Event" button and enter in the information for
					your next big event! Have fun with a custom image and a wonderful
					countdown feature!
				</p>
				<p className="about-p">
					Want to connect? Click on my picture above to connect on LinkedIn
				</p>
			</div>
			<hr className="about-line"></hr>
		</div>
	);
}

export default About;
