import "./App.css";
import axios from "axios";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { createContext, useState, useEffect } from "react";

import Welcome from "./Components/Welcome/Welcome";
import Home from "./Components/Home/Home";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
