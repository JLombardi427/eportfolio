import "./App.css";
import axios from "axios";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { createContext, useState, useEffect } from "react";

import Welcome from "./Components/Welcome/Welcome";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import About from "./Components/About/About";

export const statesContext = createContext("");

function App() {
	const { pathname } = useLocation();
	return (
		<div className="App">
			{pathname !== "/" && <Navigation></Navigation>}
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
