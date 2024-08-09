// Justin Lombardi
// August 8th, 2024
// Version 3.0
//This component is responsible for the navigation bar on the pages.
//This navigation bar handles login, signup, add, and the main home page

//Dependencies
import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { statesContext } from "../../App";

//Styling
import "./Navigation.css";

function Navigation(props) {
	const { loggedIn, handleLogout, userInfo } = useContext(statesContext);
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
				<Nav>
					{userInfo && (
						<Navbar.Text className="justify-content-end text-warning fw-bold">
							You are signed in as: {userInfo.email}
						</Navbar.Text>
					)}
					{loggedIn ? (
						<>
							<LinkContainer to="/">
								<Nav.Link
									onClick={handleLogout}
									className="text-danger fw-bold">
									Log Out
								</Nav.Link>
							</LinkContainer>
						</>
					) : (
						<>
							<LinkContainer to="/signup" className="text-warning">
								<Nav.Link>Sign Up</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/login" className="text-warning">
								<Nav.Link>Log In</Nav.Link>
							</LinkContainer>
						</>
					)}
				</Nav>
				<Link to={"/home/add"}>
					<Button>Add An Event! </Button>
				</Link>
			</Container>
		</Navbar>
	);
}

export default Navigation;
