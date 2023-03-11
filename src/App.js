import "./CSS/App.css";
import "./CSS/FindPlayer.css";
import Welcome from "./Components/Welcome";
import FindPlayer from "./Components/FindPlayer";
import { Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<>
			<header id="homepage-header" className="flex">
				<h1 className="flex">Team Deets 2</h1>
			</header>
			<div id="homepage-welcome-banner" className="flex">
				<Welcome />
			</div>
			<FindPlayer />
		</>
	);
}

export default App;
