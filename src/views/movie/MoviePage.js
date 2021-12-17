import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import useAxiosFetch from '../../utils/hooks/useAxiosFetch';
import requests from '../../api/requests';
import LoadingComponent from '../../components/loading/LoadingComponent';
import ErrorComponent from '../../components/errors/ErrorComponent';
import MovieContainer from './MovieContainer';
import GoBackButton from '../../components/common/buttons/GoBackButton';

const MoviePage = () => {
	const params = useParams();
	const location = useLocation();
	const fetchUrl = requests.fetchMovieById(params.movie);
	const { loading, dataHooks, error } = useAxiosFetch(fetchUrl);

	if (loading) return <LoadingComponent />;
	if (error) return <ErrorComponent text='Something went wrong' />;

	const movie = dataHooks.data;

	console.log(location);
	return (
		<div className='movie'>
			<MovieContainer movie={movie} comeFromPage={location.state} />
			<GoBackButton comeFromPage={location.state} />
		</div>
	);
};

export default MoviePage;
