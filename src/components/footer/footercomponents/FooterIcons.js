import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiTwitch } from 'react-icons/fi';

const FooterIcons = () => (
	<div className='footer__icons'>
		<a href='https://www.facebook.com/' target='_blank' rel='noreferrer' title='facebook'>
			<FiFacebook size={30} />
		</a>
		<a href='https://twitter.com/' target='_blank' rel='noreferrer' title='twitter'>
			<FiTwitter size={30} />
		</a>
		<a href='https://www.instagram.com/' target='_blank' rel='noreferrer' title='instagram'>
			<FiInstagram size={30} />
		</a>
		<a href='https://www.twitch.tv/' target='_blank' rel='noreferrer' title='twitch'>
			<FiTwitch size={30} />
		</a>
	</div>
);

export default FooterIcons;
