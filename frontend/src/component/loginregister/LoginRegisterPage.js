import React, {useState} from "react";
import Login from "./Login";
import Register from "./Register";

function LoginRegisterPage() {

  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  return(
    <>
      <Login showLogin={showLogin} setShowLogin={setShowLogin} setShowRegister={setShowRegister} />
      <Register showRegister={showRegister} setShowLogin={setShowLogin} setShowRegister={setShowRegister} />
    </>
  );
}

export default LoginRegisterPage;
