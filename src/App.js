import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './views/home/HomePage';
import MoviesListPage from './views/movies/MoviesListPage';
import Movie from './views/movie/MoviePage';
import NotFound from './views/notfound/NotFoundPage';
import Navbar from './components/navbar/Navbar';
import MovieSearchPage from './views/search/MovieSearchPage';
import ScrollToTop from './components/scrolltothetop/ScrollToTop';
import Footer from './components/footer/Footer';

const App = () => (
	<div className='app'>
		<Router>
			<ScrollToTop />
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/movies' element={<MoviesListPage />} />
				<Route path='/movie/:movie' element={<Movie />} />
				<Route path='/search' element={<MovieSearchPage />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
		</Router>
	</div>
);

export default App;
