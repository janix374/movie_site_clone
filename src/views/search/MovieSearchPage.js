import React, { useState } from 'react';
import { MdZoomIn } from 'react-icons/md';

const MovieSearchPage = () => {
	const [moviesearch, setMovieSearch] = useState('');
	return (
		<div className='movies__search'>
			<div className='movies__search__box__container'>
				<div className='movies__search__box'>
					<input type='text' placeholder='Search..' />
					<button type='button'>
						<MdZoomIn size={30} />
					</button>
				</div>
			</div>
			<div className='movies__search__list__container'>
				<p>movie list search</p>
			</div>
		</div>
	);
};

export default MovieSearchPage;
