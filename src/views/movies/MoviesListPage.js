import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import requests from '../../api/requests';
import MoviesListTypes from './MoviesListTypes';
import MoviesListDisplay from './MoviesListDisplay';

const MoviesListPage = () => {
	const location = useLocation();
	const [genreId, setGenereId] = useState(
		location.state == null ? 28 : Number(location.state.genre)
	);
	const [page, setPage] = useState(location.state == null ? 1 : Number(location.state.page));

	return (
		<div className='movies'>
			<MoviesListTypes
				fetchUrlMoviesTypes={requests.fetchGenresMovies}
				setGenereId={setGenereId}
				genreId={genreId}
				setPage={setPage}
			/>
			{genreId && page && <MoviesListDisplay genre={genreId} page={page} setPage={setPage} />}
		</div>
	);
};

export default MoviesListPage;
