import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import RowMoviePoster from './RowMoviePoster';
import useAxiosFetch from '../../utils/hooks/useAxiosFetch';

const RowMovies = ({ title, fetchUrl }) => {
	const { loading, dataHooks, error } = useAxiosFetch(fetchUrl);
	const sliderRef = useRef(null);

	const scroll = (scrollOffset) => {
		sliderRef.current.scrollLeft += scrollOffset;
	};

	if (loading) return <div />;
	if (error) return <div />;

	return (
		<div className='row__movies'>
			<h2>{title}</h2>
			<div className='row__carousel'>
				<div className='row__switch__left' type='button'>
					<MdSkipPrevious
						size={40}
						onClick={() => scroll(-120)}
						className='row__slide__button_left'
					/>
				</div>
				<div className='row__carousel__box' ref={sliderRef}>
					{dataHooks.data.results.map((item) => (
						<RowMoviePoster
							key={item.id}
							poster={item.poster_path}
							title={item?.name || item?.title}
							id={item.id}
						/>
					))}
				</div>
				<div className='row__switch__right' type='button'>
					<MdSkipNext size={40} className='row__slide__button_right' onClick={() => scroll(250)} />
				</div>
			</div>
		</div>
	);
};

RowMovies.propTypes = {
	title: PropTypes.string.isRequired,
	fetchUrl: PropTypes.string.isRequired,
};

export default RowMovies;
