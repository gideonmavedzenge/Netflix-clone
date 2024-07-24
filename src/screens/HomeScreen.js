import React from 'react';
import './HomeScreen.css';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Row from '../Row';
import requests from '../Requests';

function HomeScreen() {
	return (
		<div className="HomeScreen">
			<Nav />

			<Banner />

			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row
				title="ACTION"
				fetchUrl={requests.fetchActionMovies}
				// isLargeRow
			/>
			<Row
				title="COMEDY"
				fetchUrl={requests.fetchComedyMovies}
				// isLargeRow
			/>
			<Row
				title="HORROR"
				fetchUrl={requests.fetchHorrorMovies}
				// isLargeRow
			/>
			<Row
				title="ROMANCE"
				fetchUrl={requests.fetchRomanceMovies}
				// isLargeRow
			/>
			<Row
				title="DOCUMENTARIES"
				fetchUrl={requests.fetchDocumentaries}
				// isLargeRow
			/>
		</div>
	);
}

export default HomeScreen;
