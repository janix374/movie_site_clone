import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ currentPage, setCurrentPage, totalPage }) => {
	const handleNextBtn = () => {
		setCurrentPage(currentPage + 1);
		window.scrollTo(0, 0);
	};

	const handlePrevBtn = () => {
		setCurrentPage(currentPage - 1);
		window.scrollTo(0, 0);
	};

	return (
		<div className='paggination__container'>
			<div className='paggination__container__line'>
				<p>
					{currentPage} Page / Total pages {totalPage}
				</p>
			</div>
			{currentPage <= 1 ? null : (
				<div className='paggination__container__line'>
					<button type='button' onClick={() => handlePrevBtn()}>
						Previous
					</button>
				</div>
			)}
			{currentPage >= totalPage ? null : (
				<div>
					<button type='button' onClick={() => handleNextBtn()}>
						Next
					</button>
				</div>
			)}
		</div>
	);
};

Pagination.propTypes = {
	currentPage: PropTypes.number.isRequired,
	totalPage: PropTypes.number.isRequired,
	setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
