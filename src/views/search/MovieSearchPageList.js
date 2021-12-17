import React from 'react';
import PropTypes from 'prop-types';
import requests from '../../api/requests';
import useAxiosFetch from '../../utils/hooks/useAxiosFetch';
import LoadingComponent from '../../components/loading/LoadingComponent';
import MoviesCard from '../../components/moviescomponent/MoviesCard';
import Pagination from '../../components/pagination/Pagination';

const MovieSearchPageList = ({ searchText, page, setPage }) => {
	const { loading, dataHooks, error } = useAxiosFetch(requests.fetchSearchMovie(searchText, page));

	if (loading) return <LoadingComponent />;
	if (error) return '';

	return (
		<div className='movies__search__list'>
			<div className='movies__search__list__cards'>
				{dataHooks.data.results.map((item) => (
					<MoviesCard
						key={item.id}
						title={item?.title}
						poster={item?.poster_path}
						id={item.id}
						rating={item.vote_average}
						path='/search'
						text={searchText}
						page={page}
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

MovieSearchPageList.propTypes = {
	searchText: PropTypes.string.isRequired,
	page: PropTypes.number.isRequired,
	setPage: PropTypes.func.isRequired,
};

export default MovieSearchPageList;
