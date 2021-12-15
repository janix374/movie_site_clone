import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import RowMovieBackdropPoster from './RowMovieBackdropPoster';
import useAxiosFetch from '../../utils/hooks/useAxiosFetch';

const RowMoviesBackCover = ({ fetchUrl, title, scrollLeftToRight }) => {
	const { loading, dataHooks, error } = useAxiosFetch(fetchUrl);

	if (loading) return <div />;
	if (error) return <div />;

	let classBox = 'row__movies__backdrop__carousel__box__left__to__right';
	if (!scrollLeftToRight) {
		classBox = 'row__movies__backdrop__carousel__box__right__to__left';
	}

	return (
		<div className='row__movies__backdrop'>
			<h2>{title}</h2>
			<div className='row__movies__backdrop__carousel'>
				<div className={classBox}>
					{dataHooks.data.results.map((item) => (
						<RowMovieBackdropPoster
							key={item?.id}
							poster={item?.backdrop_path}
							title={item?.name || item?.title}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

RowMoviesBackCover.propTypes = {
	title: PropTypes.string.isRequired,
	fetchUrl: PropTypes.string.isRequired,
	scrollLeftToRight: PropTypes.bool.isRequired,
};

export default RowMoviesBackCover;
