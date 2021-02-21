import axios from "axios";
import {
  playlistURL,
  albumURL,
  artistURL,
  artistTracksURL,
  artistAlbumsURL,
  albumTracksURL,
} from "../api";

export const loadPlaylist = (id, x = null, y = null) => async (dispatch) => {
  dispatch({ type: "LOADING_PREVIEW" });
  let apiData;
  apiData = await axios.get(playlistURL(id));

  dispatch({
    type: "FETCH_DATA",
    payload: {
      data: apiData.data,
      type: "playlist",
      x: x,
      y: y,
    },
  });
};
export const loadAlbum = (id, x = null, y = null) => async (dispatch) => {
  dispatch({ type: "LOADING_PREVIEW" });
  let apiData;

  apiData = await axios.get(albumURL(id));

  dispatch({
    type: "FETCH_DATA",
    payload: {
      data: apiData.data,
      type: "album",
      x: x,
      y: y,
    },
  });
};
export const loadArtist = (id, x = null, y = null) => async (dispatch) => {
  dispatch({ type: "LOADING_PREVIEW" });
  let apiData;

  let apiData1 = await axios.get(artistURL(id));
  let apiData2 = await axios.get(artistTracksURL(id));

  let tracks = [...apiData2.data.data];

  apiData = {
    data: {
      ...apiData1.data,
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

  let infoArtista = await axios.get(artistURL(id));
  let TracksArtista = (await axios.get(artistTracksURL(id))).data.data;
  let AlbunsArtista = (await axios.get(artistAlbumsURL(id))).data.data;

  apiData = {
    data: {
      ...infoArtista.data,
      tracks: TracksArtista,
      albums: AlbunsArtista,
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
