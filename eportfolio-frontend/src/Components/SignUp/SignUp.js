// Justin Lombardi
// August 8th, 2024
// Version 3.0

//This component handles the sign up form for new users
//Dependencies
import React from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { statesContext } from "../../App";
import axios from "axios";

//Styling
// import './SignUp.css';

function SignUp(props) {
	const { handleSetLoggedIn } = useContext(statesContext);
	const signUpData = {
		email: "",
		password: "",
	};

	const navigate = useNavigate();
	const [signUp, setSignUp] = useState(signUpData);
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const [loginData, setLoginData] = useState(false);

	function handleChange(event) {
		setSignUp((register) => {
			return { ...register, [event.target.name]: event.target.value };
		});
	}

	async function handleSubmit(event) {
		const tempLogin = {
			email: signUp.email,
			password: signUp.password,
		};
		try {
			event.preventDefault();
			const res = await fetch("http://localhost:3002/api/users/signup", {
				method: "POST",
				body: JSON.stringify(signUp),
				headers: {
					"Content-Type": "application/json",
				},
			});
			if (res.status === 201) {
				setSuccess(true);
				const API_ENDPOINT = `http://localhost:3002/api/users/login`;
				const response = await fetch(API_ENDPOINT, {
					method: "POST",
					body: JSON.stringify(tempLogin),
					headers: {
						"Content-Type": "application/json",
					},
				});
				console.log(response);
				if (response) {
					// store values to local storage
					const data = await response.json();
					window.localStorage.setItem("token", data.token);
					window.localStorage.setItem("email", data.email);
					// set state to true for conditional rendering
					handleSetLoggedIn(data.token);
				}
			}
		} catch (error) {
			console.error(error);
		}
	}

	const passwordMatch = (event) => {
		if (signUp.password !== signUp.re_password) {
			setError(true);
		} else {
			setError(false);
		}
	};

	return (
		<div className="signup-container">
			<Form
				className="d-flex flex-column align-items-center mt-5"
				onSubmit={handleSubmit}>
				<Form.Group
					className="mb-3 w-50 mx-auto main-form"
					controlId="formBasicEmail">
					<Form.Label>Email address: </Form.Label>
					<Form.Control
						type="email"
						name="email"
						placeholder="Enter email"
						value={signUp.email}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group
					className="mb-3 w-50 mx-auto main-form"
					controlId="formBasicPassword">
					<Form.Label>Password: </Form.Label>
					<Form.Control
						type="password"
						name="password"
						placeholder="Password"
						value={signUp.password}
						onChange={handleChange}
					/>
				</Form.Group>

				<div className="text-center">
					<Button variant="primary" type="submit">
						Sign Up
					</Button>
				</div>
			</Form>
		</div>
	);
}

export default SignUp;
