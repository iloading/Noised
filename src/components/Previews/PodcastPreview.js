import React from "react";
import { motion } from "framer-motion";
//ICONS
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
//REDUX
import { useDispatch } from "react-redux";
//ROUTER
import { useHistory } from "react-router-dom";
function PodcastPreview({ novaPosition, exitHandler, previewData }) {
  //Mudar de página
  const dispatch = useDispatch();
  const history = useHistory();

  const openPage = () => {
    //Mudar o state "isLoading" para true, para fazer com que a nova página espere que os resultados da API cheguem e só depois renderizar a pág em si
    dispatch({ type: "LOADING_PLAYLIST" });
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
          />
          <div>
            <motion.h2 layoutId={`nome ${previewData.id}`}>
              {previewData.title}
            </motion.h2>
            <span>{previewData.type} preview</span>
            {/* <p>{playlist.description}</p> */}
            <p>
              {previewData.nb_tracks} tracks <span></span>
            </p>
          </div>
          <div>
            <OpenInNewIcon />
            <p>Open Playlist</p>
          </div>
        </motion.div>

        <div className="tabelaPreview">
          <table cellSpacing="0" cellPadding="0">
            <tbody>
              {previewData.tracks.data.map((chart) => (
                <tr key={chart.id}>
                  <td>
                    <span className="play-btn">
                      <PlayCircleFilledWhiteIcon />
                    </span>
                    {/* <span>
                          <FavoriteBorderIcon />
                        </span> */}
                    <span className="musica">
                      <p className="musica-title">{chart.title}</p>
                      <p className="musica-artist">{chart.artist.name}</p>
                    </span>
                  </td>
                  <td className="duration">{chart.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default PodcastPreview;
