import React from 'react';
import Banner from '../../components/banner/Banner';
import RowMovies from '../../components/rowsMovies/RowMovies';
import RowMoviesBackCover from '../../components/rowsMovies/RowMoviesBackCover';
import requests from '../../api/requests';

const HomePage = () => (
	<div className='home'>
		<Banner />
		<RowMovies title='Fetch Top Rated' fetchUrl={requests.fetchTopRated} />
		<RowMoviesBackCover
			title='Top rated'
			fetchUrl={requests.fetchTopRated}
			scrollLeftToRight={false}
		/>
		<RowMoviesBackCover
			title='Action movies'
			fetchUrl={requests.fetchMovieByTypes(28, 1)}
			scrollLeftToRight
		/>
		<RowMoviesBackCover
			title='Comedy movies'
			fetchUrl={requests.fetchMovieByTypes(35, 1)}
			scrollLeftToRight={false}
		/>
		<RowMoviesBackCover
			title='HorrorM movies'
			fetchUrl={requests.fetchMovieByTypes(27, 1)}
			scrollLeftToRight
		/>
		<RowMoviesBackCover
			title='Romance movies'
			fetchUrl={requests.fetchMovieByTypes(10751, 1)}
			scrollLeftToRight={false}
		/>
	</div>
);

export default HomePage;
