import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosFetch from '../../utils/hooks/useAxiosFetch';
import requests from '../../api/requests';
import LoadingComponent from '../../components/loading/LoadingComponent';
import ErrorComponent from '../../components/errors/ErrorComponent';
import MovieContainer from './MovieContainer';

const MoviePage = () => {
	const params = useParams();
	const fetchUrl = requests.fetchMovieById(params.movie);
	const { loading, dataHooks, error } = useAxiosFetch(fetchUrl);

	if (loading) return <LoadingComponent />;
	if (error) return <ErrorComponent text='Something went wrong' />;

	const movie = dataHooks.data;

	return (
		<div className='movie'>
			<MovieContainer movie={movie} />
		</div>
	);
};

export default MoviePage;
