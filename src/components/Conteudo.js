import React, { useState, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
function Conteudo({ data }) {
  //UseRef
  const refAlbum = useRef();
  //UseState
  const [erro, setErro] = useState();

  //Firebase AUTH
  const { currentUser, logOut } = useAuth();

  const logOutHandler = async (e) => {
    setErro("");
    try {
      await logOut();
    } catch {
      setErro("Failed to LogOut");
    }
  };

  //Scroll Carrossel Left e Right
  const scroll = (e) => {
    if (e === "right") {
      refAlbum.current.scrollLeft += 1250;
    } else {
      refAlbum.current.scrollLeft -= 1250;
    }
  };

  return (
    <div className="conteudo">
      <div className="albums" ref={refAlbum}>
        {data &&
          data.map((chart) => (
            <div className="album">
              <img src={chart.picture_medium} />
              <p className="albumName">{chart.title}</p>
            </div>
          ))}
      </div>
      <div>
        <button onClick={(e) => scroll("left")} className="scroll">
          L
        </button>
        <button onClick={(e) => scroll("right")} className="scroll">
          R
        </button>
      </div>

      <div className="tablePosition">
        <table cellSpacing="0" cellPadding="0">
          <thead>
            <tr>
              <th>Play</th>
              <th>Like</th>
              <th>Title</th>
              <th>Artist</th>
              <th>album</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((chart) => (
                <tr>
                  <td>
                    <PlayCircleFilledWhiteIcon />
                  </td>
                  <td>
                    <FavoriteBorderIcon />
                  </td>
                  <td>{chart.title}</td>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>3:54</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Link to="/update-profile">Update Profile</Link>
      <button onClick={logOutHandler}>Log Out</button>
    </div>
  );
}

export default Conteudo;
