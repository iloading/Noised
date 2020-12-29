import "./styles/app.scss";
//COMPONENTES
import Registo from "./landingPages/Registo";
import Dashboard from "./landingPages/Dashboard";
import Login from "./landingPages/Login";
import ForgotPassword from "./landingPages/ForgotPassword";
//FIREBASE AUTH
import { AuthProvider } from "./context/AuthContext";
//REACT ROUTER
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Componente PrivateRoute para não deixar aceder a certas pág's sem Login
import PrivateRoute from "./utility/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/signup">
              <Registo />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/forgot-password">
              <ForgotPassword />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
