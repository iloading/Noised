import { playlistURL, artistTracksURL, albumURL } from "../api";

const loadQueue = (id, type) => async (dispatch) => {
  dispatch({ type: "LOADING_TRACKS" });
  let apiData = null;

  switch (type) {
    case "playlist":
      apiData = await playlistURL(id);

      // apiData = await axios.get(playlistTracksURL(id));
      //Só dá as primeiras 25 musicas por isso temos que usar o playlistURL

      break;
    case "album":
      // apiData = await axios.get(albumTracksURL(id));
      //Só dá as primeiras 25 musicas por isso temos que usar o albumURL
      apiData = await albumURL(id);

      break;
    case "artist":
      // apiData = await axios.get(albumTracksURL(id));
      apiData = await artistTracksURL(id);

      break;

    default:
      break;
  }

  if (type === "artist") {
    await dispatch({
      type: "FETCH_TRACKS",
      payload: {
        currentQueue: id,
        tracks: apiData.data,
        queueType: type,
      },
    });
  } else {
    try {
      await dispatch({
        type: "FETCH_TRACKS",
        payload: {
          currentQueue: id,
          tracks: apiData.tracks.data,
          queueType: type,
        },
      });
    } catch {}
  }

  //Fix - se a música for a mesma em duas playlists diferentes, ao mudar a currentTrack dá reset (aconteceu)
  // dispatch(setCurrentTrack(null, null));
  // //Mudar a música atual
  // dispatch(setCurrentTrack(apiData.data.data[0], album));
};
export const shuffleTracks = (shuffledTracks) => async (dispatch) => {
  await dispatch({
    type: "SHUFFLE_TRACKS",
    payload: {
      tracks: shuffledTracks,
    },
  });
};
export default loadQueue;
