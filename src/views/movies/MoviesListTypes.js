import React from 'react';
import PropTypes from 'prop-types';
import useAxiosFetch from '../../utils/hooks/useAxiosFetch';

const MoviesListTypes = ({ fetchUrlMoviesTypes, setGenereId, genreId }) => {
	const { loading, dataHooks, error } = useAxiosFetch(fetchUrlMoviesTypes);

	if (loading) return '';
	if (error) return '';

	const { genres } = dataHooks.data;

	return (
		<div className='genres'>
			<div className='genres__button'>
				{genres.map((item) => (
					<button
						key={item.id}
						onClick={() => setGenereId(item.id)}
						type='button'
						className={genreId === item.id ? 'genres__button__active' : ''}
					>
						{item.name}
					</button>
				))}
			</div>
		</div>
	);
};

MoviesListTypes.propTypes = {
	fetchUrlMoviesTypes: PropTypes.string.isRequired,
	setGenereId: PropTypes.func.isRequired,
	genreId: PropTypes.number.isRequired,
};

export default MoviesListTypes;
