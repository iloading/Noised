import React from "react";
import { motion } from "framer-motion";
//ICONS
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

function ArtistPreview({ novaPosition, exitHandler, previewData }) {
  console.log(previewData);
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
          <h1>teste</h1>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ArtistPreview;
