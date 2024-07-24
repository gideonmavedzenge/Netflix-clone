const API_KEY = '2433c4a26831b6733bfc0dc4d57f0360';

const request = {
	fetchTrending: '/trending/all/week?api_key=' + API_KEY + '&language=en-US',
	fetchTopRated: '/movie/top_rated?api_key=' + API_KEY + '&language=en-US',
	fetchPopular: '/movie/popular?api_key=' + API_KEY + '&language=en-US',
	fetchDetails: '/movie/{movie_id}?api_key=' + API_KEY + '&language=en-US',
	fetchCast:
		'/movie/{movie_id}/credits?api_key=' + API_KEY + '&language=en-US',
	fetchActionMovies: '/discover/movie?api_key=' + API_KEY + '&with_genres=28',
	fetchComedyMovies: '/discover/movie?api_key=' + API_KEY + '&with_genres=35',
	fetchHorrorMovies: '/discover/movie?api_key=' + API_KEY + '&with_genres=27',
	fetchRomanceMovies:
		'/discover/movie?api_key=' + API_KEY + '&with_genres=10749',
	fetchDocumentaries:
		'/discover/movie?api_key=' + API_KEY + '&with_genres=99',
	fetchNetflixOriginals:
		'/discover/tv?api_key=' + API_KEY + '&with_networks=213',
};

export default request;
