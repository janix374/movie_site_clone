import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import requests from '../../api/requests';
import Pagination from '../../components/pagination/Pagination';
import useAxiosFetch from '../../utils/hooks/useAxiosFetch';
import LoadingComponent from '../../components/loading/LoadingComponent';
import ErrorComponent from '../../components/errors/ErrorComponent';
import MoviesListCard from './MoviesListCard';

const MovieListDisplay1 = ({ genre }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(null);
	const [totalResults, setTotalResults] = useState(null);

	useEffect(() => {
		setCurrentPage(1);
	}, [genre]);

	const { loading, dataHooks, error } = useAxiosFetch(
		requests.fetchMovieByTypes(genre, currentPage)
	);

	if (loading) return <LoadingComponent />;
	if (error) return <ErrorComponent text='Something went wrong' />;

	console.log(dataHooks);
	return (
		<div className='movies__list'>
			<div className='movie__list__cards'>
				{dataHooks.data.results.map((item) => (
					<MoviesListCard key={item.id} title={item.title} poster={item.poster_path} />
				))}
			</div>
			<Pagination
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				totalPage={dataHooks?.data.total_pages}
			/>
		</div>
	);
};

MovieListDisplay1.propTypes = {
	genre: PropTypes.number.isRequired,
};

export default MovieListDisplay1;
