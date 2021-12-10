import React from 'react';
import PropTypes from 'prop-types';
import errorPhoto from '../../assets/image/error.jpg';

const ErrorComponent = ({ text }) => (
	<div className='error__container'>
		<div className='error__tilt__flex__container'>
			<div className='error__tilt__container'>
				<div className='error__tilt__box__wrap'>
					<span className='error__t__over' />
					<span className='error__t__over' />
					<span className='error__t__over' />
					<span className='error__t__over' />
					<span className='error__t__over' />
					<span className='error__t__over' />
					<span className='error__t__over' />
					<span className='error__t__over' />
					<span className='error__t__over' />
					<div className='error__tilt__box'>
						<div className='error__title__box__img'>
							<p>{text}</p>
							<img src={errorPhoto} alt='errorphoto' />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

ErrorComponent.propTypes = {
	text: PropTypes.string.isRequired,
};

export default ErrorComponent;
