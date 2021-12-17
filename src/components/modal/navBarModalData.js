const listPages = [
	{
		id: 0,
		title: 'Home',
		path: '/',
		state: null,
	},
	{
		id: 1,
		title: 'Movie List',
		path: '/movies',
		state: null,
	},
	{
		id: 2,
		title: 'Search',
		path: '/search',
		state: null,
	},
];

const listMovie = [
	{
		id: 0,
		title: 'Action Movies',
		path: '/movies',
		state: {
			genre: 28,
			page: 1,
		},
	},
	{
		id: 1,
		title: 'Adventure Movies',
		path: '/movies',
		state: {
			genre: 12,
			page: 1,
		},
	},
	{
		id: 2,
		title: 'SF Movies',
		path: '/movies',
		state: {
			genre: 878,
			page: 1,
		},
	},
	{
		id: 3,
		title: 'Thriller Movies',
		path: '/movies',
		state: {
			genre: 53,
			page: 1,
		},
	},
	{
		id: 4,
		title: 'Mystery Movies',
		path: '/movies',
		state: {
			genre: 9648,
			page: 1,
		},
	},
	{
		id: 5,
		title: 'Romance Movies',
		path: '/movies',
		state: {
			genre: 10749,
			page: 1,
		},
	},
	{
		id: 6,
		title: 'Crime Movies',
		path: '/movies',
		state: {
			genre: 80,
			page: 1,
		},
	},
	{
		id: 7,
		title: 'War Movies',
		path: '/movies',
		state: {
			genre: 10752,
			page: 1,
		},
	},
];

export { listPages, listMovie };
