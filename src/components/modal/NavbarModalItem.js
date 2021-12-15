/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

const NavbarModalItem = (MyComponent) => {
	const NewComponent = ({ data, title, onClose }) => (
		<div className='navbar__modal__item'>
			<div className='navbar__modal__item__title'>
				<IconContext.Provider value={{ className: 'navbar__modal__icon' }}>
					<div>
						<MyComponent />
					</div>
				</IconContext.Provider>
				<div>{title}</div>
			</div>
			<ul>
				{data.map((item) => (
					<li key={item.id}>
						<Link to={item.path} onClick={onClose}>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
	NewComponent.propTypes = {
		data: PropTypes.array.isRequired,
		title: PropTypes.string.isRequired,
		onClose: PropTypes.func.isRequired,
	};

	return NewComponent;
};

NavbarModalItem.propTypes = {
	MyComponent: PropTypes.element.isRequired,
};

export default NavbarModalItem;
