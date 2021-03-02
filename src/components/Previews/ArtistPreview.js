import React from "react";
import { motion } from "framer-motion";

//REDUX
import { useDispatch } from "react-redux";
//ROUTER
import { useHistory } from "react-router-dom";
//COMPONENTES
import MusicaNaTabela from "./MusicaNaTabela";
function ArtistPreview({ novaPosition, exitHandler, previewData }) {
  //Mudar de página
  const dispatch = useDispatch();
  const history = useHistory();

  const openPage = () => {
    //Mudar o state "isLoading" para true, para fazer com que a nova página espere que os resultados da API cheguem e só depois renderizar a pág em si
    dispatch({ type: "LOADING_PREVIEW" });
    history.push(`/${previewData.type}/${previewData.id}`);
  };

  return (
    <motion.div className="card-shadow" onClick={exitHandler}>
      <motion.div
        className="playlist"
        style={{ top: novaPosition.y, left: novaPosition.x }}
        layoutId={previewData.id}
      >
        <motion.div className="ArtistPreview">
          <div className="heightArtist">
            <motion.img
              layoutId={`image ${previewData.id}`}
              src={previewData.picture}
              alt={previewData.picture}
              onClick={openPage}
            />
            <div className="marginArtist">
              <motion.h2 layoutId={`nome ${previewData.id}`} onClick={openPage}>
                {previewData.name}
              </motion.h2>

              <p>
                {previewData.nb_fan} followers <span></span>
              </p>
            </div>
          </div>
        </motion.div>

        <div className="tabelaPreview tabelaPreviewFix">
          <table cellSpacing="0" cellPadding="0">
            <thead className="topSongs">
              <td>
                <h2>Top 5 Artist's Songs</h2>
              </td>
            </thead>
            <tbody>
              {previewData.tracks.map((track) => (
                <MusicaNaTabela
                  chart={track}
                  key={track.id}
                  previewData={previewData}
                />
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ArtistPreview;
