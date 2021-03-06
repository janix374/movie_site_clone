import React from 'react';
import PropTypes from 'prop-types';
import useAxiosFetch from '../../utils/hooks/useAxiosFetch';

const MoviesListTypes = ({ fetchUrlMoviesTypes, setGenereId, genreId, setPage }) => {
	const { loading, dataHooks, error } = useAxiosFetch(fetchUrlMoviesTypes);

	if (loading) return '';
	if (error) return '';

	const handleClick = (id) => {
		setGenereId(id);
		setPage(1);
	};

	const handleChange = (event) => {
		setGenereId(Number(event.target.value));
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
				<form>
					<select name='genres' onChange={handleChange}>
						{genres.map((item) => (
							<option value={item.id} key={item.id}>
								{item.name}
							</option>
						))}
					</select>
				</form>
			</div>
		</div>
	);
};

MoviesListTypes.propTypes = {
	fetchUrlMoviesTypes: PropTypes.string.isRequired,
	setGenereId: PropTypes.func.isRequired,
	genreId: PropTypes.number.isRequired,
	setPage: PropTypes.func.isRequired,
};

export default MoviesListTypes;
