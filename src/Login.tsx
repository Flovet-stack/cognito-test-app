import React, { useContext, useState } from "react";
import { AccountContext } from "./Account";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authenticate } = useContext(AccountContext);

  const onSubmit = (event: any) => {
    event.preventDefault();
    authenticate(email, password)
      .then((data) => {
        console.log(
          "🚀 ~ file: Login.tsx:12 ~ authenticate ~ Logged in! ~ data:",
          data
        );
      })
      .catch((error) => {
        console.log("🚀 ~ file: Login.tsx:14 ~ authenticate ~ error:", error);
      });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
