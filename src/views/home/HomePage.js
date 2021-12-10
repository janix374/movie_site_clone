import React from 'react';
import Banner from '../../components/banner/Banner';
import RowMovies from '../../components/rowsMovies/RowMovies';
import RowMoviesBackDrop from '../../components/rowsMovies/RowMoviesBackDrop';
import requests from '../../api/requests';

const HomePage = () => {
	console.log('home page');
	return (
		<div className='home'>
			<Banner />
			<RowMovies title='Fetch Top Rated' fetchUrl={requests.fetchTopRated} />
			<RowMoviesBackDrop
				title='Top rated'
				fetchUrl={requests.fetchTopRated}
				scrollLeftToRight={false}
			/>
			<RowMoviesBackDrop
				title='Action movies'
				fetchUrl={requests.fetchActionMovies}
				scrollLeftToRight
			/>
			<RowMoviesBackDrop
				title='Comedy movies'
				fetchUrl={requests.fetchComedyMovies}
				scrollLeftToRight={false}
			/>
			<RowMoviesBackDrop
				title='HorrorM movies'
				fetchUrl={requests.fetchHorrorMovies}
				scrollLeftToRight
			/>
			<RowMoviesBackDrop
				title='Romance movies'
				fetchUrl={requests.fetchRomanceMovies}
				scrollLeftToRight={false}
			/>
		</div>
	);
};

export default HomePage;
