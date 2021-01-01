import React from "react";
import { motion } from "framer-motion";
//ICONS
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
// import OpenInNewIcon from "@material-ui/icons/OpenInNew";
//REDUX
import { useDispatch } from "react-redux";
//ROUTER
import { useHistory } from "react-router-dom";
function ArtistPreview({ novaPosition, exitHandler, previewData }) {
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
        <motion.div className="ArtistPreview">
          <div className="heightArtist">
            <motion.img
              layoutId={`image ${previewData.id}`}
              src={previewData.picture}
              alt={previewData.picture}
            />
            <div className="marginArtist">
              <motion.h2 layoutId={`nome ${previewData.id}`}>
                {previewData.name}
              </motion.h2>

              <p>
                {previewData.nb_fan} followers <span></span>
              </p>
            </div>
          </div>
        </motion.div>

        <div className="tabelaPreview">
          <table className="artistMusicList" cellSpacing="0" cellPadding="0">
            <tbody>
              {previewData.tracks.map((track) => (
                <tr key={track.id}>
                  <td>
                    {" "}
                    <img
                      className="previewImgSong"
                      src={track.album.cover}
                      alt={track.album.cover}
                    />
                  </td>
                  <td>
                    <span className="play-btn">
                      <PlayCircleFilledWhiteIcon />
                    </span>
                    {/* <span></span>
                          <FavoriteBorderIcon />
                        </span> */}
                    <span className="musica">
                      <p className="musica-title">{track.title}</p>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ArtistPreview;
