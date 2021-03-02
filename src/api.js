//HOME
const fetchAPI = async (link) => {
  return new Promise((resolve) => {
    window.DZ.api(link, function (response) {
      resolve(response);
    });
  });
};

//HOME
export const topPlaylistsURL = fetchAPI("chart/0/playlists");
export const topAlbumsURL = fetchAPI("chart/0/albums");
export const topArtistsURL = fetchAPI("chart/0/artists");

//DETAILS
export const playlistURL = (id) => fetchAPI(`playlist/${id}`);
export const albumURL = (id) => fetchAPI(`album/${id}`);
export const artistURL = (id) => fetchAPI(`artist/${id}`);
export const artistTracksURL = (id) => fetchAPI(`artist/${id}/top?limit=5`);
export const artistAlbumsURL = (id) => fetchAPI(`artist/${id}/albums`);

//SEARCH
export const searchTrackURL = (search) => fetchAPI(`search/track?q="${search}`);
export const searchAlbumURL = (search) =>
  fetchAPI(`search/album?q=:"${search}`);
export const searchArtistURL = (search) =>
  fetchAPI(`search/artist?q=:"${search}`);
export const searchPlaylistURL = (search) =>
  fetchAPI(`search/playlist?q=:"${search}`);

//OLD WAYS of CORS PROBLEMS _>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// //DETAILS
// export const playlistURL = (id) => `${baseUrl}playlist/${id}`;
// export const albumURL = (id) => `${baseUrl}album/${id}`;
// export const artistURL = (id) => `${baseUrl}artist/${id}`;
// export const artistTracksURL = (id) => `${baseUrl}artist/${id}/top?limit=5`;
// export const artistAlbumsURL = (id) => `${baseUrl}artist/${id}/albums`;
// export const podcastURL = (id) => `${baseUrl}podcast/${id}`;

//TRACKS
//ATENÇÃO ESTES DOIS PEDIDOS SÓ DÃO AS PRIMEIRAS 25 MÚSICAS DA LISTA, PARA OBTER TODAS DEVEMOS USAR OS LINKS QUE ESTÃO EM CIMA
// export const playlistTracksURL = (id) => `${baseUrl}playlist/${id}/tracks`;
// export const albumTracksURL = (id) => `${baseUrl}album/${id}/tracks`;

// export const ArtistTracksURL = (id) => `${baseUrl}artist/${id}/tracks`;
