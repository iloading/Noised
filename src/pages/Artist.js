import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadArtistPage } from "../actions/mediaDataAction";
// ICONS
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
//ROUTER
import { useHistory } from "react-router-dom";

function Artist() {
  const history = useHistory();

  const openPage = (id) => {
    //Mudar o state "isLoading" para true, para fazer com que a nova página espere que os resultados da API cheguem e só depois renderizar a pág em si
    dispatch({ type: "LOADING_PREVIEW" });
    history.push(`/album/${id}`);
  };

  //ROUTER
  const location = useLocation();
  const pathID = location.pathname.split("/")[2];

  //Pedido à API w/ REDUX assim que a HOME carrega
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadArtistPage(pathID));
  }, [dispatch, pathID]);

  //CONSULTAR O QUE ESTÁ NO STATE (REDUX)
  const { data: media, isLoading } = useSelector((state) => state.mediaData);

  return (
    <>
      {!isLoading && (
        <div className="playlist_album main-conteudo">
          <div className="artistHead">
            <img src={media.picture_medium} alt={media.picture_medium} />
            <div>
              <h2>{media.name}</h2>

              <p>
                {media.nb_album} albums<span></span>
              </p>
            </div>
          </div>
          <div className="artistPageTitles">
            <h1>Top Songs</h1>
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
                {media.tracks.map((chart) => (
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

          <div className="artistPageTitles">
            <h1>Albums</h1>
          </div>

          <div className="listaAlbums">
            {media.albums.map((album) => (
              <div
                key={album.id}
                className="album"
                onClick={() => openPage(album.id)}
              >
                <img
                  src={album.cover_medium}
                  alt={album.cover_medium}
                  className="item-foto"
                />
                <p className="music-title">{album.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Artist;
