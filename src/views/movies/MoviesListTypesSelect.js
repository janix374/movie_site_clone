import React from 'react';
import PropTypes from 'prop-types';
import useAxiosFetch from '../../utils/hooks/useAxiosFetch';

const MoviesListTypesSelect = ({ fetchUrlMoviesTypes, setGenereId, genreId, setPage }) => {
	const { loading, dataHooks, error } = useAxiosFetch(fetchUrlMoviesTypes);

	if (loading) return '';
	if (error) return '';

	const handleClick = (id) => {
		setGenereId(id);
		setPage(1);
	};

	const { genres } = dataHooks.data;
	return (
		<div className='genres'>
			<div className='genres__button'>
				{genres.map((item) => (
					<button
						key={item.id}
						onClick={() => handleClick(item.id)}
						type='button'
						className={genreId === item.id ? 'genres__button__active' : ''}
					>
						{item.name}
					</button>
				))}
			</div>
			<div className='genres__select'>
				<select name='genres' className='genres__select__class'>
					<option value='volvo'>Volvo</option>
					<option value='saab'>Saab</option>
					<option value='mercedes'>Mercedes</option>
					<option value='audi'>Audi</option>
				</select>
			</div>
		</div>
	);
};

MoviesListTypesSelect.propTypes = {
	fetchUrlMoviesTypes: PropTypes.string.isRequired,
	setGenereId: PropTypes.func.isRequired,
	genreId: PropTypes.number.isRequired,
	setPage: PropTypes.func.isRequired,
};

export default MoviesListTypesSelect;
