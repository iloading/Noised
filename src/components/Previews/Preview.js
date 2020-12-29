import React from "react";
//REDUX
import { useSelector } from "react-redux";
//UTIL
import { resizePlaylistPreview } from "../../utility/resizePlaylistPreview";
//ROUTER
import { useHistory } from "react-router-dom";
//COMPONENTS
import PlaylistPreview from "./PlaylistPreview";
import AlbumPreview from "./AlbumPreview";
import ArtistPreview from "./ArtistPreview";
import PodcastPreview from "./PodcastPreview";
function Preview() {
  //Carregar info da playlist
  const { data: previewData, position, isLoading, type } = useSelector(
    (state) => state.preview
  );

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
      history.push("/");
    }
  };

  return (
    <>
      {!isLoading && (
        <>
          {type === "_playlist" && (
            <PlaylistPreview
              exitHandler={exitHandler}
              previewData={previewData}
              novaPosition={novaPosition}
            />
          )}
          {type === "_album" && (
            <AlbumPreview
              exitHandler={exitHandler}
              previewData={previewData}
              novaPosition={novaPosition}
            />
          )}
          {type === "_artist" && (
            <ArtistPreview
              exitHandler={exitHandler}
              previewData={previewData}
              novaPosition={novaPosition}
            />
          )}
          {type === "_podcast" && (
            <PodcastPreview
              exitHandler={exitHandler}
              previewData={previewData}
              novaPosition={novaPosition}
            />
          )}
        </>
      )}
    </>
  );
}

export default Preview;
