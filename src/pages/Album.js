import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
//REDUX
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { loadAlbum } from "../actions/mediaDataAction";

//COMPONENTES
import AlbumTrack from "./AlbumTrack";
function Album() {
  //ROUTER
  const location = useLocation();
  const pathID = location.pathname.split("/")[2];

  //Pedido à API w/ REDUX assim que a HOME carrega
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAlbum(pathID));
  }, [dispatch, pathID]);

  useEffect(() => {
    return () => {
      dispatch({ type: "LOADING_PREVIEW" });
    };
  }, [dispatch]);

  //CONSULTAR O QUE ESTÁ NO STATE (REDUX)
  const { data: media, isLoading } = useSelector(
    (state) => state.mediaData,
    shallowEqual
  );
  return (
    <>
      {!isLoading && (
        <div className="playlist_album main-conteudo">
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
                  <AlbumTrack
                    chart={chart}
                    previewData={media}
                    key={chart.id}
                  />
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
