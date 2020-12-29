import React from "react";
import { motion } from "framer-motion";
//REDUX
import { useSelector } from "react-redux";

function PlaylistPreview() {
  //DATA
  const { data: playlist, position } = useSelector((state) => state.playlist);

  return (
    <>
      {playlist && (
        <motion.div className="card-shadow">
          <motion.div
            className="playlist"
            style={{ top: position.y, left: position.x }}
          >
            <h3>{playlist.title}</h3>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default PlaylistPreview;
