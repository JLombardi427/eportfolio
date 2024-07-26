import "./App.css";
import axios from "axios";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { createContext, useState, useEffect } from "react";

import Welcome from "./Components/Welcome/Welcome";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import About from "./Components/About/About";
import EditEvent from "./Components/EditEvent/EditEvent";
import AddEvent from "./Components/AddEvent/AddEvent";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";

export const statesContext = createContext("");

function App() {
	// URLs
	const baseUrl = "http://localhost:3002/api/events";
	//useState Variables
	const [user, setUser] = useState(false);
	const [events, setEvents] = useState(false);
	const [userId, setUserId] = useState(false);
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem("token") ? true : false
	);
	const [userInfo, setUserInfo] = useState(null);
	const handleSetLoggedIn = (token) => {
		localStorage.setItem("token", token);
		getUserInfo();
		setLoggedIn(true);
	};
	// Get User Info function
	const getUserInfo = async () => {
		try {
			const response = await fetch(baseUrl + "users/me/", {
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

	// Use Effect for getting user info
	useEffect(() => {
		if (loggedIn) {
			getUserInfo();
		}
	}, []);

	// Get Events api call function
	const getEvents = async () => {
		try {
			const res = await axios.get(baseUrl);
			setEvents(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getEvents();
	}, []);

	return (
		<div className="App">
			<statesContext.Provider
				value={{
					events,
					setEvents,
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
