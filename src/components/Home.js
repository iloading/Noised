import React, { useState, useHistory } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Home() {
  //UseState
  const [erro, setErro] = useState();
  //Firebase AUTH
  const { currentUser, logOut } = useAuth();
  //UseHistory

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
      <div>
        <h1>HOME</h1>
        {erro && <h2>{erro}</h2>}
        <strong>Email: </strong>
        {currentUser.email}
        <Link to="/update-profile">Update Profile</Link>
        <button onClick={logOutHandler}>Log Out</button>
      </div>
    </>
  );
}

export default Home;
