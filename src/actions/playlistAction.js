import axios from "axios";
import { playlistURL } from "../api";

const loadPlaylist = (id, x, y) => async (dispatch) => {
  const playlistData = await axios.get(playlistURL(id));

  dispatch({
    type: "FETCH_PLAYLIST",
    payload: {
      playlist: playlistData.data,
      x: x,
      y: y,
    },
  });
};

export default loadPlaylist;
