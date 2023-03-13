import React, { useState } from "react";
import { Account } from "./Account";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import Status from "./Status";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const toggle = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="App">
      <Account>
        <Status />
        {!showLogin && <Register />}
        {showLogin && <Login />}

        <button type="button" onClick={toggle}>
          {!showLogin && <span>show login</span>}
          {showLogin && <span>show register</span>}
        </button>
      </Account>
    </div>
  );
}

export default App;
