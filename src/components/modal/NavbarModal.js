import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { MdHighlightOff } from 'react-icons/md';
import { listPages } from './navBarModalData';

const NavbarModal = ({ open, onClose }) => {
	if (!open) return null;
	return ReactDOM.createPortal(
		<div className='navbar__modal'>
			<button type='button' onClick={onClose} className='navbar__modal__button'>
				<MdHighlightOff size={40} />
			</button>
			<div className='navbar__modal__container'>
				<div className='navbar__modal__item'>
					<p className='navbar__modal__item__title'>Pages</p>
					<ul>
						{listPages.map((item) => (
							<li key={item.id}>
								<Link to={item.path}>{item.title}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className='navbar__modal__item'>
					<p className='navbar__modal__item__title'>Movies</p>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>,
		document.getElementById('portal')
	);
};

export default NavbarModal;
