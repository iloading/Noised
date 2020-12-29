import axios from "axios";
import { playlistURL, albumURL, artistURL, podcastURL } from "../api";

const loadPlaylist = (id, type, x = null, y = null) => async (dispatch) => {
  dispatch({ type: "LOADING_PLAYLIST" });
  let apiData;

  switch (type) {
    case "_playlist":
      apiData = await axios.get(playlistURL(id));

      break;
    case "_album":
      apiData = await axios.get(albumURL(id));

      break;
    case "_artist":
      apiData = await axios.get(artistURL(id));
      break;
    case "_podcast":
      apiData = await axios.get(podcastURL(id));
      break;

    default:
      break;
  }

  dispatch({
    type: "FETCH_DATA",
    payload: {
      data: apiData.data,
      type: type,
      x: x,
      y: y,
    },
  });
};

export default loadPlaylist;