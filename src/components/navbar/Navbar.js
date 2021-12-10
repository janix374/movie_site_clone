import React, { useState } from 'react';
// import { MdZoomIn } from 'react-icons/md';
import { MdNotes } from 'react-icons/md';
import movieLogo from '../../assets/logo/movies.png';
import NavbarModal from '../modal/NavbarModal';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	console.log(isOpen);
	return (
		<div className='nav'>
			<NavbarModal open={isOpen} onClose={() => setIsOpen(false)} />
			<div className='nav__logo__container'>
				<img src={movieLogo} alt='cinema-logo' />
			</div>

			{/* <div className='nav__search__container'>
				<input type='text' placeholder='Search..' />
				<button type='button'>
					<MdZoomIn size={30} />
				</button>
			</div> */}

			<div className='nav__modal__container'>
				<button className='nav__modal__button' type='button' onClick={() => setIsOpen(true)}>
					<MdNotes size={30} />
				</button>
			</div>
		</div>
	);
};

export default Navbar;
