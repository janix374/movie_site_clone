import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import requests from '../../api/requests';
import errorPhoto from '../../assets/image/errorphoto.jpg';

const MoviesCard = ({ title, poster, id, rating, genre, page, path, text }) => (
	<Link to={`/movie/${id}`} state={{ genre, page, path, text }}>
		<div className='movie__card'>
			<div
				className={
					rating > 6.5 ? 'movie__card__badge badge__hot' : 'movie__card__badge badge__cold'
				}
			>
				<span className='badge'>{rating}</span>
			</div>
			<div className='movie__card__poster'>
				{poster !== null ? (
					<img src={`${requests.imgTMDB}${poster}`} alt={title} />
				) : (
					<img src={errorPhoto} alt={title} />
				)}
			</div>
			<div>
				<h4>{title}</h4>
			</div>
		</div>
	</Link>
);

MoviesCard.propTypes = {
	title: PropTypes.string.isRequired,
	poster: PropTypes.string,
	id: PropTypes.number.isRequired,
	rating: PropTypes.number.isRequired,
	genre: PropTypes.number,
	page: PropTypes.number,
	path: PropTypes.string.isRequired,
	text: PropTypes.string,
};

export default MoviesCard;
