const baseUrl = "https://api.deezer.com/";

//HOME
export const topPlaylistsURL = () => `${baseUrl}chart/0/playlists`;
export const topAlbumsURL = () => `${baseUrl}chart/0/albums`;
export const topArtistsURL = () => `${baseUrl}chart/0/artists`;
export const topPodcastsURL = () => `${baseUrl}chart/0/podcasts`;

//DETAILS
export const playlistURL = (id) => `${baseUrl}playlist/${id}`;
