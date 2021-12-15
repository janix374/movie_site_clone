import React from 'react';
import ReactDOM from 'react-dom';
import { MdHighlightOff, MdPlagiarism, MdTheaters } from 'react-icons/md';
import { listPages, listMovieTypes } from './navBarModalData';
import NavbarModalItem from './NavbarModalItem';

const NavBarItemPages = NavbarModalItem(MdPlagiarism);
const NavBarItemMoviesTypes = NavbarModalItem(MdTheaters);

const NavbarModal = ({ open, onClose }) => {
	if (!open) return null;
	return ReactDOM.createPortal(
		<div className='navbar__modal'>
			<div className='navbar__modal__button__container'>
				<button type='button' onClick={onClose} className='navbar__modal__button'>
					<MdHighlightOff size={40} />
				</button>
			</div>

			<div className='navbar__modal__container'>
				<NavBarItemPages data={listPages} title='Pages' onClose={onClose} />
				<NavBarItemMoviesTypes data={listMovieTypes} title='Movies' onClose={onClose} />
			</div>
		</div>,
		document.getElementById('portal')
	);
};

export default NavbarModal;
