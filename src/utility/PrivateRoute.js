import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

//Assim garantimos que só conseguem aceder a certas páginas da aplicação com login
function PrivateRoute({ component: Component, ...rest }) {
  // Importar o currentUser
  const { currentUser } = useAuth();
  //Se existir -> dá acesso à página, se não -> faz Redirect para a pág de login
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}

export default PrivateRoute;
