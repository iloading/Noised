import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import google from "../img/google.png";
import appImg3 from "../img/old-man-listening-songs-on-a-phone.png";

function Login() {
  //UseState
  const [erro, setErro] = useState("");
  const [criandoConta, setcriandoConta] = useState(false);
  //useRef
  const emailRef = useRef();
  const passwordRef = useRef();
  //UseHistory
  const history = useHistory();
  //Função Registo
  const { login, loginWithGoogle } = useAuth();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setcriandoConta(true);
      setErro("");
      await login(emailRef.current.value, passwordRef.current.value);
      setcriandoConta(false);
      history.push("/");
    } catch {
      setErro("Failed to Login, please try again");
    }
  };
  const GooglesubmitHandler = async (e) => {
    try {
      setcriandoConta(true);
      setErro("");
      await loginWithGoogle();
      setcriandoConta(false);
      history.push("/");
    } catch {
      setErro("Failed to Login, please try again");
    }
  };
  return (
    <div className="body">
      <div className="registoBox">
        <div className="coluna-form">
          <h1>Log In</h1>
          {erro && <h2 className="erro">{erro}</h2>}

          <button onClick={GooglesubmitHandler} className="google-sign-in">
            <img src={google} alt="" />
            <span>Sign in with google</span>
          </button>

          <form onSubmit={submitHandler}>
            <section id="email">
              <span>Email</span>
              <input required type="email" ref={emailRef} />
            </section>
            <div>
              <section id="password">
                <span>Password</span>
                <input required type="password" ref={passwordRef} />
              </section>
            </div>
            <button disabled={criandoConta} type="submit">
              Log In
            </button>
          </form>
          <div className="help">
            <div>
              Need an account? <Link to="/signup">Sign Up</Link>
            </div>
            <div>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="coluna-logo">
        <img src={appImg3} alt="" />
      </div>
    </div>
  );
}

export default Login;
