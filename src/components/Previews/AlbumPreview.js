import { motion } from "framer-motion";
//ICONS

//REDUX
import { useDispatch } from "react-redux";

//ROUTER
import { useHistory } from "react-router-dom";
//COMPONENTES
import MusicaNaTabela from "./MusicaNaTabela";

function AlbumPreview({ novaPosition, exitHandler, previewData }) {
  // console.log(previewData);
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
        <motion.div className="playlistHead">
          <motion.img
            layoutId={`image ${previewData.id}`}
            src={previewData.cover}
            alt={previewData.cover}
            onClick={openPage}
          />
          <div>
            <motion.h2 layoutId={`nome ${previewData.id}`} onClick={openPage}>
              {previewData.title}
            </motion.h2>
            <span>{previewData.type} preview</span>
            {/* <p>{playlist.description}</p> */}
            <p>
              {previewData.nb_tracks} tracks <span></span>
            </p>
          </div>
        </motion.div>

        <div className="tabelaPreview">
          <table cellSpacing="0" cellPadding="0">
            <tbody>
              {previewData.tracks.data.map((chart) => (
                <MusicaNaTabela
                  chart={chart}
                  previewData={previewData}
                  key={chart.id}
                />
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AlbumPreview;
