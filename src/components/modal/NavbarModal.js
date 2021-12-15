import React from 'react';
import ReactDOM from 'react-dom';
import { MdHighlightOff, MdPlagiarism, MdTheaters, MdScreenSearchDesktop } from 'react-icons/md';
import { listPages, listMovie, searchMovies } from './navBarModalData';
import NavbarModalItem from './NavbarModalItem';

const NavBarItemPages = NavbarModalItem(MdPlagiarism);
const NavBarItemMovies = NavbarModalItem(MdTheaters);
const NavBarSearchMovie = NavbarModalItem(MdScreenSearchDesktop);

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
				<NavBarItemMovies data={listMovie} title='Movies' onClose={onClose} />
				<NavBarSearchMovie data={searchMovies} title='Search' onClose={onClose} />
			</div>
		</div>,
		document.getElementById('portal')
	);
};

export default NavbarModal;
