export default function FindPlayer() {
	return (
		<main id="homepage-find-player" className="flex">
			<form id="homepage-find-player-form" className="flex">
				<label htmlFor="homepage-search-input" id="homepage-search-label">
					Find Summoner:
				</label>
				<input
					id="homepage-search-input"
					placeholder="Enter summoner name..."
				></input>
				<select id="homepage-search-region">
					<option>North America</option>
					<option>Europe West</option>
					<option>Europe Nordic & East</option>
					<option>Oceania</option>
					<option>Russia</option>
					<option>Turkey</option>
					<option>Brazil</option>
					<option>Latin America North</option>
					<option>Latin America South</option>
					<option>Japan</option>
				</select>
				<button id="homepage-search-button">Search</button>
			</form>
		</main>
	);
}
