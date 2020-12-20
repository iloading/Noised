import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import google from "../img/google.png";
import appImg2 from "../img/indian-male-dancing.png";
function Registo() {
  //UseState
  const [erro, setErro] = useState();
  const [criandoConta, setcriandoConta] = useState(false);
  //useRef
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  //UseHistory
  const history = useHistory();
  //Função Registo
  const { signUp } = useAuth();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setErro("Passwords do not match, please try again");
    }
    try {
      setErro();
      setcriandoConta(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setErro(
        "The email/password is not available or do not meet the minimum requirements"
      );
    }
    setcriandoConta(false);
  };
  return (
    <div className="body">
      <div className="registoBox">
        <div className="coluna-form">
          <h2>Sign Up</h2>
          {erro && <h2>{erro}</h2>}

          <button className="google-sign-in">
            <img src={google} alt="" />
            <span>Sign in with google</span>
          </button>

          <form onSubmit={submitHandler}>
            <section id="email">
              <span>Email</span>
              <input required type="email" ref={emailRef} />
            </section>
            <div className="passwords">
              <section id="password">
                <span>Password</span>
                <input required type="password" ref={passwordRef} />
              </section>
              <section id="Password-confirm">
                <span>Confirmar Password</span>
                <input required type="password" ref={passwordConfirmRef} />
              </section>
            </div>
            <button disabled={criandoConta} type="submit">
              Sign In
            </button>
          </form>

          <div className="help">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
      <div className="coluna-logo">
        <img src={appImg2} alt="" />
      </div>
    </div>
  );
}

export default Registo;
