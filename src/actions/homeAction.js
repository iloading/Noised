import axios from "axios";

import {
  topPlaylistsURL,
  topAlbumsURL,
  topArtistsURL,
  topPodcastsURL,
} from "../api";

//Criar uma Ação
export const loadHome = () => async (dispatch) => {
  const homePlaylistsData = await axios.get(topPlaylistsURL());
  const homeArtistsData = await axios.get(topArtistsURL());
  const homeAlbumsData = await axios.get(topAlbumsURL());
  const homePodcastsData = await axios.get(topPodcastsURL());
  dispatch({
    type: "FETCH_HOME_MUSIC",
    payload: {
      topPlaylists: homePlaylistsData.data.data,
      topArtists: homeArtistsData.data.data,
      topAlbums: homeAlbumsData.data.data,
      topPodcasts: homePodcastsData.data.data,
    },
  });
};
