import {
  searchTrackURL,
  searchAlbumURL,
  searchArtistURL,
  searchPlaylistURL,
} from "../api";

export const searchInfo = (search) => async (dispatch) => {
  dispatch({ type: "LOADING_RESULTS" });

  let apiDataTracks = await searchTrackURL(search);
  let apiDataAlbums = await searchAlbumURL(search);
  let apiDataArtists = await searchArtistURL(search);
  let apiDataPlaylists = await searchPlaylistURL(search);

  dispatch({
    type: "SAVE_DATA",
    payload: {
      term: search,
      tracks: apiDataTracks.data,
      albums: apiDataAlbums.data,
      artists: apiDataArtists.data,
      playlists: apiDataPlaylists.data,
    },
  });
};
