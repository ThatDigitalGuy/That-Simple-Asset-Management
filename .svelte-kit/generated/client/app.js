export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11')
];

export const server_loads = [];

export const dictionary = {
		"/": [4],
		"/app/[company]": [5,[],[2]],
		"/app/[company]/reports": [9,[],[2]],
		"/app/[company]/settings": [10,[],[2]],
		"/app/[company]/users": [11,[],[2]],
		"/app/[company]/[site]/dashboard": [6,[,3],[2]],
		"/app/[company]/[site]/dashboard/settings": [7,[,3],[2]],
		"/app/[company]/[site]/dashboard/users": [8,[,3],[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';