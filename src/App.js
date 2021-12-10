import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './views/home/HomePage';
import MoviesListPage from './views/movies/MoviesListPage';
import Movie from './views/movie/MoviePage';
import NotFound from './views/notfound/NotFoundPage';
import Navbar from './components/navbar/Navbar';
import NavbarModal from './components/modal/NavbarModal';

const App = () => (
	<div className='app'>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='*' element={<NotFound />} />
				<Route path='/' element={<HomePage />} />
				<Route path='movies' element={<MoviesListPage />} />
				<Route path='movie/:movie' element={<Movie />} />
			</Routes>
		</BrowserRouter>
	</div>
);

export default App;
