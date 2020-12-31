import axios from "axios";
import {
  playlistURL,
  albumURL,
  artistURL,
  artistTracksURL,
  podcastURL,
  artistAlbumsURL,
} from "../api";

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
      let apiData1 = await axios.get(artistURL(id));
      let apiData2 = await axios.get(artistTracksURL(id));
      let apiData3 = await axios.get(artistAlbumsURL(id));
      let tracks = [...apiData2.data.data];
      let albums = apiData3.data.data;

      apiData = {
        data: {
          ...apiData1.data,
          tracks: tracks,
          albums: albums,
        },
      };
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
