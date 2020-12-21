import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
function Conteudo({ data }) {
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
    <div>
      <div className="conteudo">
        <div>
          {data &&
            data.map((chart) => (
              <div>
                <img src={chart.picture} />
                <p>{chart.title}</p>
              </div>
            ))}
        </div>

        <Link to="/update-profile">Update Profile</Link>
        <button onClick={logOutHandler}>Log Out</button>
      </div>
    </div>
  );
}

export default Conteudo;
