import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const GoBackButton = ({ display, fontsize, comeFromPage }) => {
	const navigate = useNavigate();
	const handleGoBack = () => {
		if (comeFromPage == null) {
			navigate('/');
		} else {
			navigate(comeFromPage.path, {
				state: {
					genre: comeFromPage.genre,
					page: comeFromPage.page,
					text: comeFromPage.text,
				},
			});
		}
	};

	return (
		<div className='goback__button__container' style={{ display: `${display}%` }}>
			<button
				className='goback__button'
				onClick={handleGoBack}
				type='button'
				style={{ fontSize: `${fontsize}px` }}
			>
				Go back
			</button>
		</div>
	);
};

GoBackButton.propTypes = {
	display: PropTypes.number,
	fontsize: PropTypes.number,
	comeFromPage: PropTypes.shape({
		genre: PropTypes.number,
		page: PropTypes.number,
		path: PropTypes.string,
		text: PropTypes.string,
	}),
};

export default GoBackButton;
