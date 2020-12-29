import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import loadPlaylist from "../actions/playlistAction";
function Playlist() {
  //ROUTER
  const location = useLocation();
  const pathID = location.pathname.split("/")[2];

  //Pedido à API w/ REDUX assim que a HOME carrega
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPlaylist(pathID, `_playlist`));
  }, [dispatch, pathID]);

  //CONSULTAR O QUE ESTÁ NO STATE (REDUX)
  const { data: playlist, isLoading } = useSelector((state) => state.preview);
  return (
    <>
      {!isLoading && (
        <div>
          <h1>{playlist.title}</h1>
        </div>
      )}
    </>
  );
}

export default Playlist;
