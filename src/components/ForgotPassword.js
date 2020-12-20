import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import google from "../img/google.png";
import appLogo from "../img/azul bola.png";
import appImg from "../img/girl-enjoying-music.png";

function ForgotPassword() {
  //UseState
  const [erro, setErro] = useState();
  const [mensagem, setMensagem] = useState("");
  const [criandoConta, setcriandoConta] = useState(false);
  //useRef
  const emailRef = useRef();

  //Função Recuperar
  const { resetPassword } = useAuth();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setMensagem("");
      setErro();
      setcriandoConta(true);
      await resetPassword(emailRef.current.value);
      setMensagem("Check your email to reset the password");
    } catch {
      setErro("Failed to Reset Password");
    }
    setcriandoConta(false);
  };
  return (
    <div className="body">
      <div className="registoBox">
        <div className="coluna-form">
          <h1>Recover Password</h1>
          {erro && <h2>{erro}</h2>}
          {mensagem && <h2>{mensagem}</h2>}

          <form onSubmit={submitHandler}>
            <section id="email">
              <span>Email</span>
              <input required type="email" ref={emailRef} />
            </section>

            <button type="submit">Recover Password</button>
          </form>
          <div className="help">
            <h3>
              Go back to <Link to="/login">Login</Link>
            </h3>
            <div>
              Need an account? <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="coluna-logo">
        <img src={appImg} alt="" />
      </div>
    </div>
  );
}

export default ForgotPassword;
