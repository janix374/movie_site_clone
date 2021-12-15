import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import requests from '../../api/requests';

const MoviesListCard = ({ title, poster, id, rating }) => (
	<Link to={`/movie/${id}`}>
		<div className='movie__list__card'>
			<div
				className={
					rating > 6.5
						? 'movie__list__card__badge badge__hot'
						: 'movie__list__card__badge badge__cold'
				}
			>
				<span className='badge'>{rating}</span>
			</div>
			<div className='movie__list__card__poster'>
				<img src={`${requests.imgTMDB}${poster}`} alt={title} />
			</div>
			<div>
				<h4>{title}</h4>
			</div>
		</div>
	</Link>
);

MoviesListCard.propTypes = {
	title: PropTypes.string.isRequired,
	poster: PropTypes.string,
	id: PropTypes.number.isRequired,
	rating: PropTypes.number.isRequired,
};

export default MoviesListCard;
