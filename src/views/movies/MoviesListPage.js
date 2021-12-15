import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import requests from '../../api/requests';
import MoviesListTypes from './MoviesListTypes';
import MoviesListDisplay from './MoviesListDisplay';

const MoviesListPage = () => {
	const location = useLocation();
	const [genreId, setGenereId] = useState(
		location.state == null ? 28 : Number(location.state.genreIdState)
	);

	console.log(location);

	return (
		<div className='movies'>
			<MoviesListTypes
				fetchUrlMoviesTypes={requests.fetchGenresMovies}
				setGenereId={setGenereId}
				genreId={genreId}
			/>
			{genreId && <MoviesListDisplay genre={genreId} />}
		</div>
	);
};

export default MoviesListPage;
