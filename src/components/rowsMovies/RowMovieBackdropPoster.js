import React from 'react';
import PropTypes from 'prop-types';
import requests from '../../api/requests';

const RowMovieBackdropPoster = ({ poster, title }) => (
	<div className='row__backdrop__poster'>
		<img
			className='row__backdrop__image'
			src={`${requests.imgTMDB}/${poster}`}
			alt='movie back cover'
		/>
		<div className='row__backdrop__poster__title' title={title}>
			<p>{title}</p>
		</div>
	</div>
);

RowMovieBackdropPoster.propTypes = {
	poster: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default RowMovieBackdropPoster;
