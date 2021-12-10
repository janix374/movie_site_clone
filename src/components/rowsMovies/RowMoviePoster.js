import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import requests from '../../api/requests';

const RowMoviePoster = ({ poster, title, id }) => (
	<div className='row__poster'>
		<Link to={`movie/${id}`}>
			<img className='row__image' src={`${requests.imgTMDB}/${poster}`} alt='movie' />
		</Link>
		<div className='row__poster__title' title={title}>
			<p>{title}</p>
		</div>
	</div>
);

RowMoviePoster.propTypes = {
	poster: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
};

export default RowMoviePoster;
