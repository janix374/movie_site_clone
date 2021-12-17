import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';

const NavbarModalItem = (MyComponent) => {
	const NewComponent = ({ data, title, onClose }) => {
		const navigate = useNavigate();
		const handleClick = (path, state) => {
			navigate(path, { state });
			onClose();
			window.location.reload(false);
		};
		return (
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
							<button onClick={() => handleClick(item.path, item.state)} type='button'>
								{item.title}
							</button>
						</li>
					))}
				</ul>
			</div>
		);
	};
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
