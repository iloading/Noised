import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
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

  return (
    <>
      <main className="main">
        <Navbar />

        <div className="conteudo">
          <h1>HOME</h1>
          {erro && <h2>{erro}</h2>}
          <strong>Email: </strong>
          {currentUser.email}
          <Link to="/update-profile">Update Profile</Link>
          <button onClick={logOutHandler}>Log Out</button>
        </div>
      </main>
    </>
  );
}

export default Home;
