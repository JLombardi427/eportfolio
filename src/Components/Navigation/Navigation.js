import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Navigation.css";

function Navigation(props) {
	return (
		<Navbar bg="dark" expand="lg" collapseOnSelect={true}>
			<Container className="nav-bar">
				<Navbar.Brand as={Link} to="/home" className="nav-title">
					<h1>Calen-Dos</h1>
				</Navbar.Brand>

				<Nav className="ms-auto nav-bar">
					<Nav.Link as={Link} to="/home" className="text-warning">
						Home
					</Nav.Link>
					<Nav.Link as={Link} to="/about" className="text-warning">
						About
					</Nav.Link>
				</Nav>
				<Link to={"/home/add"}>
					<Button>Add An Event! </Button>
				</Link>
			</Container>
		</Navbar>
	);
}

export default Navigation;
