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
		re_password: "",
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
		try {
			event.preventDefault();
			// POST request for signup
			const res = await axios.post(`http://localhost:3002/api/signup`, signUp);
			// POST request for login to auto login after signup
			const loginRes = await axios.post(
				`http://localhost:3002/api/login`,
				signUp
			);
			// get data from login POST request response
			const data = loginRes.data;
			if (data) {
				// store values to local storage
				window.localStorage.setItem("token", data.token);
				window.localStorage.setItem("email", data.email);
				window.localStorage.setItem("userId", data.userId);
				// set state to true for conditional rendering
				props.loggedInTrue();
			}
		} catch (error) {
			console.log(error);
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
				<Form.Group controlId="re_password" className="mb-3 w-50 main-form">
					<Form.Label>Confirm Password: </Form.Label>
					<Form.Control
						required
						type="password"
						name="re_password"
						placeholder="Confirm password"
						value={signUp.confirm_password}
						onChange={handleChange}
						onBlur={passwordMatch}
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
