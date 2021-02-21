import axios from "axios";
import {
  playlistURL,
  playlistTracksURL,
  albumTracksURL,
  albumURL,
} from "../api";
import setCurrentTrack from "./currentTrackAction";

const loadQueue = (id, type) => async (dispatch) => {
  dispatch({ type: "LOADING_TRACKS" });
  let apiData = null;
  let album = null;
  switch (type) {
    case "playlist":
      apiData = await axios.get(playlistURL(id));
      // apiData = await axios.get(playlistTracksURL(id));
      //Só dá as primeiras 25 musicas por isso temos que usar o playlistURL

      break;
    case "album":
      // apiData = await axios.get(albumTracksURL(id));
      //Só dá as primeiras 25 musicas por isso temos que usar o albumURL
      apiData = await axios.get(albumURL(id));

      break;

    default:
      break;
  }
  console.log(apiData);
  await dispatch({
    type: "FETCH_TRACKS",
    payload: {
      currentQueue: id,
      tracks: apiData.data.tracks.data,
      queueType: type,
    },
  });
  //Fix - se a música for a mesma em duas playlists diferentes, ao mudar a currentTrack dá reset (aconteceu)
  // dispatch(setCurrentTrack(null, null));
  // //Mudar a música atual
  // dispatch(setCurrentTrack(apiData.data.data[0], album));
};
export default loadQueue;
