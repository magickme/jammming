export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/Playlist.svelte"),
	() => import("../../src/routes/SearchBar.svelte"),
	() => import("../../src/routes/SearchResults.svelte"),
	() => import("../../src/routes/Track.svelte"),
	() => import("../../src/routes/TrackList.svelte"),
	() => import("../../src/routes/index.svelte")
];

export const dictionary = {
	"": [[0, 7], [1]],
	"Playlist": [[0, 2], [1]],
	"SearchBar": [[0, 3], [1]],
	"SearchResults": [[0, 4], [1]],
	"Track": [[0, 5], [1]],
	"TrackList": [[0, 6], [1]]
};