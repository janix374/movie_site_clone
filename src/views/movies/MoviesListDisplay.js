import React from 'react';
import PropTypes from 'prop-types';
import requests from '../../api/requests';
import Pagination from '../../components/pagination/Pagination';
import useAxiosFetch from '../../utils/hooks/useAxiosFetch';
import LoadingComponent from '../../components/loading/LoadingComponent';
import ErrorComponent from '../../components/errors/ErrorComponent';
import MoviesCard from '../../components/moviescomponent/MoviesCard';

const MovieListDisplay = ({ genre, page, setPage }) => {
	const { loading, dataHooks, error } = useAxiosFetch(requests.fetchMovieByTypes(genre, page));

	if (loading) return <LoadingComponent />;
	if (error) return <ErrorComponent text='Something went wrong' />;

	return (
		<div className='movies__list'>
			<div className='movie__list__cards'>
				{dataHooks.data.results.map((item) => (
					<MoviesCard
						key={item.id}
						title={item.title}
						poster={item?.poster_path}
						id={item.id}
						rating={item.vote_average}
						genre={genre}
						page={page}
						path='/movies'
					/>
				))}
			</div>
			<Pagination
				currentPage={page}
				setCurrentPage={setPage}
				totalPage={dataHooks?.data.total_pages}
			/>
		</div>
	);
};

MovieListDisplay.propTypes = {
	genre: PropTypes.number.isRequired,
	page: PropTypes.number.isRequired,
	setPage: PropTypes.func.isRequired,
};

export default MovieListDisplay;
