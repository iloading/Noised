import React, { useEffect } from "react";

//REDUX PEDIDO À API
import { useDispatch, useSelector } from "react-redux";

//ROUTER
import { useLocation } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";

function Browse() {
  return (
    <div className="home main-conteudo">
      <div className="conteudoTop">
        <div className="titulosTop">
          <h1 className="teste">Browse</h1>
          <p>Search your favorite music, artist or album</p>
        </div>
        <div className="searchInput">
          <label>
            <span>
              <SearchIcon color="disabled" fontSize="large" />
            </span>
            <input placeholder="search"></input>
          </label>
        </div>
      </div>

      {/* <div className="listaAlbums">
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
        </div> */}
    </div>
  );
}

export default Browse;
