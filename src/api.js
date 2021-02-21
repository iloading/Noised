const baseUrl = "https://api.deezer.com/";

//HOME
export const topPlaylistsURL = () => `${baseUrl}chart/0/playlists`;
export const topAlbumsURL = () => `${baseUrl}chart/0/albums`;
export const topArtistsURL = () => `${baseUrl}chart/0/artists`;
export const topPodcastsURL = () => `${baseUrl}chart/0/podcasts`;

//DETAILS
export const playlistURL = (id) => `${baseUrl}playlist/${id}`;
export const albumURL = (id) => `${baseUrl}album/${id}`;
export const artistURL = (id) => `${baseUrl}artist/${id}`;
export const artistTracksURL = (id) => `${baseUrl}artist/${id}/top?limit=5`;
export const artistAlbumsURL = (id) => `${baseUrl}artist/${id}/albums`;
export const podcastURL = (id) => `${baseUrl}podcast/${id}`;

//TRACKS
//ATENÇÃO ESTES DOIS PEDIDOS SÓ DÃO AS PRIMEIRAS 25 MÚSICAS DA LISTA, PARA OBTER TODAS DEVEMOS USAR OS LINKS QUE ESTÃO EM CIMA
export const playlistTracksURL = (id) => `${baseUrl}playlist/${id}/tracks`;
export const albumTracksURL = (id) => `${baseUrl}album/${id}/tracks`;

// export const ArtistTracksURL = (id) => `${baseUrl}artist/${id}/tracks`;
