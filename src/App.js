// Justin Lombardi
// August 8th, 2024
// Version 3.0
//This is our main App.js file that handles the components and useContext web hook
//This component also handles the logging in and out true/false variables.

//Dependencies
import "./App.css";
import axios from "axios";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { createContext, useState, useEffect } from "react";

//Components
import Welcome from "./Components/Welcome/Welcome";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import About from "./Components/About/About";
import EditEvent from "./Components/EditEvent/EditEvent";
import AddEvent from "./Components/AddEvent/AddEvent";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";

//Export of useState to use throughout the program
export const statesContext = createContext("");

function App() {
	// URLs
	const baseUrl = "http://localhost:3002/api/events";

	// constants that handle url path for conditional rendering of Navigation component
	const { pathname } = useLocation();
	const navigate = useNavigate();
	//useState Variables
	const [user, setUser] = useState(false);
	const [userId, setUserId] = useState(false);
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem("token") ? true : false
	);
	const [userInfo, setUserInfo] = useState(null);

	//function to handle login state true when actually logged in
	const handleSetLoggedIn = (token) => {
		localStorage.setItem("token", token);
		getUserInfo();
		setLoggedIn(true);
	};

	// Get User Info function
	const getUserInfo = async () => {
		try {
			const response = await fetch(baseUrl + "/users/me/", {
				headers: {
					Authorization: `Token ${localStorage.getItem("token")}`,
				},
			});
			const data = await response.json();
			if (data.detail === "Invalid token.") {
				setUserInfo(null);
				setLoggedIn(false);
				return;
			} else {
				setUserInfo(data);
				setUserId(data.id);
				setLoggedIn(true);
				return;
			}
		} catch (error) {
			console.log(error);
		}
	};

	// Handle logout function
	const handleLogout = async () => {
		console.log(localStorage.getItem("token"));
		try {
			const response = await fetch(baseUrl + "token/logout/", {
				method: "POST",
				headers: {
					Authorization: `Token ${localStorage.getItem("token")}`,
				},
			});
			if (response.status === 204) {
				setLoggedIn(false);
				setUserInfo(null);
				localStorage.removeItem("token");
			}
		} catch (err) {
			console.log(err);
		}
	};

	// Use Effect to perform a side effect of getting user info if the user is logged in
	useEffect(() => {
		if (loggedIn) {
			getUserInfo();
		}
	}, []);

	return (
		<div className="App">
			{/* useContext hook that allows the use of following variables through the program */}
			<statesContext.Provider
				value={{
					user,
					setUser,
					loggedIn,
					userInfo,
					handleSetLoggedIn,
					baseUrl,
					handleLogout,
					userId,
				}}>
				{pathname !== "/" && <Navigation></Navigation>}
				<Routes>
					<Route path="/" element={<Welcome />} />
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/home/edit" element={<EditEvent />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/home/add" element={<AddEvent />} />
				</Routes>
			</statesContext.Provider>
		</div>
	);
}

export default App;
