import {
  topPlaylistsURL,
  topAlbumsURL,
  topArtistsURL,
  // topPodcastsURL,
} from "../api";

//Criar uma Ação
export const loadHome = () => async (dispatch) => {
  //Old Way
  // const homePlaylistsData = await axios.get(topPlaylistsURL());
  // const homeArtistsData = await axios.get(topArtistsURL());
  // const homeAlbumsData = await axios.get(topAlbumsURL());

  //New way
  const homePlaylistsData = await topPlaylistsURL;
  const homeArtistsData = await topArtistsURL;
  const homeAlbumsData = await topAlbumsURL;

  // const homePodcastsData = await axios.get(topPodcastsURL());
  dispatch({
    type: "FETCH_HOME_MUSIC",
    payload: {
      topPlaylists: homePlaylistsData.data,
      topArtists: homeArtistsData.data,
      topAlbums: homeAlbumsData.data,
      // topPodcasts: homePodcastsData.data.data,
    },
  });
};
