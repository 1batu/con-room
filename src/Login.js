import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://i.pinimg.com/originals/3d/a5/b2/3da5b24f7c6bf9569faa2abef03089ae.png" />
      </div>
      <Button onClick={signIn}>Giriş Yap</Button>
    </div>
  );
}

export default Login;
