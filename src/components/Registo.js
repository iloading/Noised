import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";

function Registo() {
  //UseState
  const [erro, setErro] = useState();
  const [criandoConta, setcriandoConta] = useState(false);
  //useRef
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
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
    } catch {
      setErro(
        "The email/password is not available or do not meet the minimum requirements"
      );
    }
    setcriandoConta(false);
  };
  return (
    <div>
      <div>
        <h2>Sign Up</h2>
        {erro && <h2>{erro}</h2>}
        <form onSubmit={submitHandler}>
          <section id="email">
            <span>Email</span>
            <input required type="email" ref={emailRef} />
          </section>
          <section id="password">
            <span>Password</span>
            <input
              required
              type="password"
              ref={passwordRef}
              placeholder="min. 6 caracteres"
            />
          </section>
          <section id="password-confirm">
            <span>Confirm Password</span>
            <input
              required
              type="password"
              ref={passwordConfirmRef}
              placeholder="min. 6 caracteres"
            />
          </section>
          <button disabled={criandoConta} type="submit">
            Sign Up
          </button>
        </form>
      </div>
      <div>Already have an account? Login</div>
    </div>
  );
}

export default Registo;
