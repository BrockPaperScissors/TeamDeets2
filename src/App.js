import "./App.css";
import Welcome from "./Components/Welcome";
import { Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<>
			<body>
				<header id="homepage-header">
					<h1>Team Deets 2</h1>
				</header>
			</body>
			<Welcome />;
		</>
	);
}

export default App;
