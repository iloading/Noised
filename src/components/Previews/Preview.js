import React from "react";
//REDUX
import { useSelector } from "react-redux";
//UTIL
import { resizePlaylistPreview } from "../../utility/resizePlaylistPreview";
//ROUTER
import { useHistory, useLocation } from "react-router-dom";
//COMPONENTS
import PlaylistPreview from "./PlaylistPreview";
import AlbumPreview from "./AlbumPreview";
import ArtistPreview from "./ArtistPreview";

function Preview() {
  //Carregar info da playlist

  const { data: previewData, position, isLoading, type } = useSelector(
    (state) => state.mediaData
  );

  const location = useLocation();
  let paginaAtual = location.pathname.split("/")[1];

  //Obter porsição correta para renderizar o componente
  let novaPosition = resizePlaylistPreview(position);
  //Sair da preview

  const history = useHistory();
  const exitHandler = (e) => {
    const elemento = e.target;
    if (elemento.classList.contains("card-shadow")) {
      //fechar o pop-up

      document.body.style.overflow = "auto";

      //voltar para a home
      if (paginaAtual === "home") {
        history.push("/");
      }
    }
  };

  return (
    <>
      {!isLoading && (
        <>
          {type === "playlist" && (
            <PlaylistPreview
              exitHandler={exitHandler}
              previewData={previewData}
              novaPosition={novaPosition}
            />
          )}
          {type === "album" && (
            <AlbumPreview
              exitHandler={exitHandler}
              previewData={previewData}
              novaPosition={novaPosition}
            />
          )}
          {type === "artist" && (
            <ArtistPreview
              exitHandler={exitHandler}
              previewData={previewData}
              novaPosition={novaPosition}
            />
          )}
          {/* {type === "podcast" && (
            <PodcastPreview
              exitHandler={exitHandler}
              previewData={previewData}
              novaPosition={novaPosition}
            />
          )} */}
        </>
      )}
    </>
  );
}

export default Preview;
