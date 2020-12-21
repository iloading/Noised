import React, { useState, useEffect } from "react";

import Navbar from "./Navbar";
import Conteudo from "./Conteudo";
import axios from "axios";

function Home() {
  const [data, setData] = useState();
  //DADOS API
  useEffect(() => {
    axios
      .get("https://api.deezer.com/chart/0/playlists")
      .then((data) => {
        console.log(data.data.data);
        setData(data.data.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <main className="main">
        <Navbar />
        <Conteudo data={data} />
      </main>
    </>
  );
}

export default Home;
