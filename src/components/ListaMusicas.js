import React from "react";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function ListaMusicas() {
  return (
    <div className="conteudo">
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
            {/* {data &&
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
              ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListaMusicas;
