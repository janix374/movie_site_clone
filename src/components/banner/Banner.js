import React from 'react';
import { Link } from 'react-router-dom';
import requests from '../../api/requests';
import useAxiosFetch from '../../utils/hooks/useAxiosFetch';
import BannerError from './BannerError';

const Banner = () => {
	const { loading, dataHooks, error } = useAxiosFetch(requests.fetchNetflixOriginals);

	let movie = {};
	if (loading) return <BannerError />;
	if (error) return <BannerError />;

	movie = dataHooks.data.results[Math.floor(Math.random() * dataHooks.data.results.length - 1)];
	const truncate = (str, n) => (str?.length > n ? `${str.substr(0, n - 1)}...` : str);

	return (
		<header
			className='banner'
			style={{
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
			}}
		>
			<div className='banner__contents'>
				<h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>

				<div className='banner__buttons'>
					<button className='banner__button' type='button'>
						<Link to={`movie/${movie.id}`}>Play</Link>
					</button>
					<button className='banner__button' type='button'>
						<Link to='movies'>Movie List</Link>
					</button>
				</div>
				<h1 className='banner__description'>{movie && truncate(movie?.overview, 150)}</h1>
			</div>
			<div className='banner__fadeBottom' />
		</header>
	);
};

export default Banner;
