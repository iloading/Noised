import {
  playlistURL,
  albumURL,
  artistURL,
  artistTracksURL,
  artistAlbumsURL,
} from "../api";

export const loadPlaylist = (id, x = null, y = null) => async (dispatch) => {
  dispatch({ type: "LOADING_PREVIEW" });
  let apiData;
  apiData = await playlistURL(id);
  console.log(apiData);
  dispatch({
    type: "FETCH_DATA",
    payload: {
      data: apiData,
      type: "playlist",
      x: x,
      y: y,
    },
  });
};
export const loadAlbum = (id, x = null, y = null) => async (dispatch) => {
  dispatch({ type: "LOADING_PREVIEW" });
  let apiData;

  apiData = await albumURL(id);

  dispatch({
    type: "FETCH_DATA",
    payload: {
      data: apiData,
      type: "album",
      x: x,
      y: y,
    },
  });
};
export const loadArtist = (id, x = null, y = null) => async (dispatch) => {
  dispatch({ type: "LOADING_PREVIEW" });
  let apiData;

  let apiData1 = await artistURL(id);
  let apiData2 = await artistTracksURL(id);

  let tracks = [...apiData2.data];

  apiData = {
    data: {
      ...apiData1,
      tracks: tracks,
    },
  };

  dispatch({
    type: "FETCH_DATA",
    payload: {
      data: apiData.data,
      type: "artist",
      x: x,
      y: y,
    },
  });
};
export const loadArtistPage = (id, x = null, y = null) => async (dispatch) => {
  dispatch({ type: "LOADING_PREVIEW" });
  let apiData;

  let infoArtista = await artistURL(id);
  let TracksArtista = await artistTracksURL(id);
  let AlbunsArtista = await artistAlbumsURL(id);

  apiData = {
    data: {
      ...infoArtista,
      tracks: TracksArtista.data,
      albums: AlbunsArtista.data,
    },
  };
  console.log(apiData);
  dispatch({
    type: "FETCH_DATA",
    payload: {
      data: apiData.data,
      type: "artist",
      x: x,
      y: y,
    },
  });
};
