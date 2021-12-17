import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import requests from '../../api/requests';
import YoutubeTrailer from '../../components/youtubetrailer/YoutubeTrailer';
import errorPhoto from '../../assets/image/errorphoto.jpg';

const MovieContainer = ({ movie }) => (
	<div className='movie__container'>
		<section className='movie__title'>
			<h1>{movie.title}</h1>
			<p> Original title: {movie.original_title}</p>
			<p>{movie.release_date.slice(0, 4)}</p>
		</section>

		<section className='movie__trailer'>
			<div className='movie__trailer__img__box'>
				{movie.poster_path !== null ? (
					<img
						src={`${requests.imgTMDB}${movie.poster_path}`}
						alt=''
						className='movie__trailer__img'
					/>
				) : (
					<img src={errorPhoto} alt='' className='movie__trailer__img' />
				)}
			</div>
			<div className='movie__trailer__box'>
				<YoutubeTrailer name={movie?.title} />
			</div>
		</section>

		<section className='movie__details'>
			<div className='movie__details__button'>
				{movie.genres.map((item) => (
					<Link to='/movies' state={{ genre: `${item.id}`, page: 1 }} key={item.id}>
						{item.name}
					</Link>
				))}
			</div>
			<div className='movie__details__text'>
				<p className='movie__details__overview'>{movie.overview}</p>
				<p>
					Production countries:{' '}
					{movie.production_countries.map((item) => (
						<span key={item.name}>{item.name},</span>
					))}
				</p>
				<p>Language : {movie.original_language}</p>
				<p>Duration: {movie.runtime}min</p>
				<p>
					IMDB:{' '}
					<a href={`https://www.imdb.com/title/${movie.imdb_id}/`} target='_blank' rel='noreferrer'>
						{movie.vote_average}
					</a>
				</p>
				<p>
					Homepage:{' '}
					<a href={movie.homepage} target='_blank' rel='noreferrer'>
						{movie.homepage}
					</a>
				</p>
			</div>
		</section>
	</div>
);

MovieContainer.propTypes = {
	movie: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default MovieContainer;
