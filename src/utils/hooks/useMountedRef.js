import React, { useRef, useEffect } from 'react';

const useMountedRef = () => {
	const mounted = useRef(null);
	useEffect(() => {
		mounted.current = true;
		// eslint-disable-next-line no-return-assign
		return () => (mounted.current = false);
	});
	return mounted;
};

export default useMountedRef;
