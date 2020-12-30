import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import loadPlaylist from "../actions/playlistAction";
// ICONS
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function Album() {
  //ROUTER
  const location = useLocation();
  const pathID = location.pathname.split("/")[2];

  //Pedido à API w/ REDUX assim que a HOME carrega
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPlaylist(pathID, "_album"));
  }, [dispatch, pathID]);

  //CONSULTAR O QUE ESTÁ NO STATE (REDUX)
  const { data: media, isLoading } = useSelector((state) => state.mediaData);
  return (
    <>
      {!isLoading && (
        <div className="playlist_album">
          <div className="mediaHead">
            <img src={media.cover_medium} alt={media.cover_medium} />
            <div>
              <span>{media.type}</span>
              <h2>{media.title}</h2>

              <p>
                By <span>{media.artist.name}</span>
              </p>
              <p>
                {media.nb_tracks} tracks, {media.duration} min<span></span>
              </p>
            </div>
          </div>

          <div className=" tabelaMedia">
            <table cellSpacing="0" cellPadding="0">
              <thead>
                <tr className="album-tr">
                  <td></td>
                  <td></td>
                  <td>Title</td>

                  <td className="music-duration">Duration</td>
                </tr>
              </thead>
              <tbody>
                {media.tracks.data.map((chart) => (
                  <tr key={chart.id} className="album-tr">
                    <td className="play-btn">
                      <PlayCircleFilledWhiteIcon />
                    </td>
                    <td className="favorite-btn">
                      <FavoriteBorderIcon />
                    </td>
                    <td className="music-title">{chart.title}</td>

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

export default Album;
