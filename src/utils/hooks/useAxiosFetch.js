import React, { useState, useEffect } from 'react';
// eslint-disable-next-line camelcase
import { unstable_batchedUpdates } from 'react-dom';
import useMountedRef from './useMountedRef';
import axios from '../../api/axios';

const useAxiosFetch = (url) => {
	const [dataHooks, setDataHooks] = useState();
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	const mounted = useMountedRef();

	useEffect(async () => {
		if (!url) return;
		if (!mounted.current) return;
		setLoading(true);
		try {
			const request = await axios.get(url);
			setDataHooks(request);
			setLoading(false);
		} catch (err) {
			if (!mounted.current) return;
			setError(true);
			setLoading(false);
		}
	}, [url]);
	return {
		loading,
		dataHooks,
		error,
	};
};

export default useAxiosFetch;
