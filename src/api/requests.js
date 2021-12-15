const requests = {
	fetchNetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_TMDB_PUBLIC_KEY}&with_networks=213`,
	fetchTopRated: `/movie/popular?api_key=${process.env.REACT_APP_TMDB_PUBLIC_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_PUBLIC_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_PUBLIC_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_PUBLIC_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_PUBLIC_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_PUBLIC_KEY}&with_genres=99`,
	fetchGenresMovies: `/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_PUBLIC_KEY}&language=en-US`,
	fetchMovieById: (id) =>
		`/movie/${id}?api_key=${process.env.REACT_APP_TMDB_PUBLIC_KEY}&language=en-US`,
	fetchMovieByTypes: (type, page) =>
		`/discover/movie?api_key=${process.env.REACT_APP_TMDB_PUBLIC_KEY}&with_genres=${type}&page=${page}`,
	imgTMDB: `https://image.tmdb.org/t/p/original`,
};

export default requests;
