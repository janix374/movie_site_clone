import React from 'react';
import { Link } from 'react-router-dom';
import moviesbanner from '../../assets/image/moviesbanner.jpg';

const BannerError = () => (
	<header
		className='banner'
		style={{
			backgroundSize: 'cover',
			backgroundImage: `url(${moviesbanner})`,
			backgroundPosition: 'center center',
		}}
	>
		<div className='banner__contents'>
			<h1 className='banner__title'>Cinema</h1>

			<div className='banner__buttons'>
				{/* <button className='banner__button' type='button'>
					<Link to='movies/:movie'>Play</Link>
				</button> */}
				<button className='banner__button' type='button'>
					<Link to='movies'>Movie List</Link>
				</button>
			</div>
		</div>
		<div className='banner__fadeBottom' />
	</header>
);

export default BannerError;
