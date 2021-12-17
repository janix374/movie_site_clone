import React, { useState } from 'react';
import { MdZoomIn } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import MovieSearchPageList from './MovieSearchPageList';

const MovieSearchPage = () => {
	const location = useLocation();
	const [searchText, setSearchText] = useState(location.state == null ? '' : location.state.text);
	const [page, setPage] = useState(location.state == null ? 1 : location.state.page);

	const handleOnchange = (value) => {
		setSearchText(value);
	};

	return (
		<div className='movies__search'>
			<div className='movies__search__box__container'>
				<div className='movies__search__box'>
					<input
						type='text'
						placeholder='Search..'
						onChange={(e) => handleOnchange(e.target.value)}
						value={searchText}
					/>
					<button type='button'>
						<MdZoomIn size={30} />
					</button>
				</div>
			</div>
			{searchText && <MovieSearchPageList searchText={searchText} page={page} setPage={setPage} />}
		</div>
	);
};

export default MovieSearchPage;
