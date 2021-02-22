import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadPlaylist } from "../actions/mediaDataAction";
// ICONS
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function Playlist() {
  //ROUTER
  const location = useLocation();
  const pathID = location.pathname.split("/")[2];

  //Pedido à API w/ REDUX assim que a HOME carrega
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPlaylist(pathID));
  }, [dispatch, pathID]);

  //CONSULTAR O QUE ESTÁ NO STATE (REDUX)
  const { data: media, isLoading } = useSelector((state) => state.mediaData);
  return (
    <>
      {!isLoading && (
        <div className="playlist_album main-conteudo">
          <div className="mediaHead">
            <img src={media.picture_medium} alt={media.picture_medium} />
            <div>
              <span>{media.type}</span>
              <h2>{media.title}</h2>

              <p>
                By <span>{media.creator && media.creator.name}</span>
              </p>
              <p>
                {media.nb_tracks} tracks, {media.duration} min<span></span>
              </p>
            </div>
          </div>

          <div className=" tabelaMedia">
            <table cellSpacing="0" cellPadding="0">
              <thead>
                <tr className="playlist-tr">
                  <td></td>
                  <td></td>
                  <td>Title</td>
                  <td>Artist</td>
                  <td>Album</td>
                  <td className="music-duration">Duration</td>
                </tr>
              </thead>
              <tbody>
                {media.tracks.data.map((chart) => (
                  <tr key={chart.id} className="playlist-tr">
                    <td className="play-btn">
                      <PlayCircleFilledWhiteIcon />
                    </td>
                    <td className="favorite-btn">
                      <FavoriteBorderIcon />
                    </td>
                    <td className="music-title">{chart.title}</td>
                    <td className="music-artist">
                      <span>{chart.artist.name}</span>
                    </td>
                    <td className="music-artist">
                      <span>{chart.album.title}</span>
                    </td>
                    <td className="music-duration">{chart.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default Playlist;
