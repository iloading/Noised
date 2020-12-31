import axios from "axios";
import { playlistTracksURL, albumTracksURL } from "../api";
import currentTrack from "../actions/currentTrackAction";

const loadTracks = (id, type) => async (dispatch) => {
  dispatch({ type: "LOADING_TRACKS" });
  let apiData;

  switch (type) {
    case "_playlist":
      apiData = await axios.get(playlistTracksURL(id));

      break;
    case "_album":
      apiData = await axios.get(albumTracksURL(id));

      break;

    default:
      break;
  }

  await dispatch({
    type: "FETCH_TRACKS",
    payload: {
      tracks: apiData.data.data,
    },
  });
  dispatch(currentTrack(apiData.data.data[0]));
};
export default loadTracks;
