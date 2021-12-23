import React from 'react';
import googleplay from '../../../assets/logo/googleplay.png';
import appstore from '../../../assets/logo/appstore.png';

const FooterRights = () => (
	<div className='footer__rights'>
		<div>
			<div className='footer__rights__img'>
				<a href='https://www.apple.com/app-store/' target='_blank' rel='noreferrer'>
					<img src={appstore} alt='app store' />
				</a>
				<a href='https://play.google.com/store' target='_blank' rel='noreferrer'>
					<img src={googleplay} alt='google play' />
				</a>
			</div>
		</div>
		<div className='footer__rights__text'>
			<p>Copyright © 2021 Cinema</p>
			<p>Cinema is a registered trademark of Cinema, Inc. All rights reserved.</p>
		</div>
	</div>
);

export default FooterRights;
