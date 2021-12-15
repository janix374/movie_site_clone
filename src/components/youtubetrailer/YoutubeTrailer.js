import React, { useState } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { MdPlayArrow } from 'react-icons/md';

const YoutubeTrailer = ({ name }) => {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState('');
	const [visible, setVisible] = useState(false);

	const opts = {
		height: '500',
		width: '100%',
		playerVars: {
			autoplay: 1,
		},
	};

	const handleClick = (movie) => {
		setVisible(true);
		if (trailerUrl) {
			setTrailerUrl('');
		} else {
			movieTrailer(movie || '')
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get('v'));
				})
				.catch((error) => console.log(error));
		}
	};

	return (
		<div className='youtube__component'>
			{visible ? (
				<div className='youtube__component__item'>
					{trailerUrl ? (
						<YouTube videoId={trailerUrl} opts={opts} />
					) : (
						<p>Movie trailer not available</p>
					)}
				</div>
			) : (
				<div className='youtube__component__item'>
					<button onClick={() => handleClick(name)} type='button'>
						<MdPlayArrow size={40} />
					</button>
				</div>
			)}
		</div>
	);
};

YoutubeTrailer.propTypes = {
	name: PropTypes.string.isRequired,
};

export default YoutubeTrailer;
