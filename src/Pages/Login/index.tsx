import { useContext } from "react";
import { AuthContext } from "../../App";
import { Link, redirect } from "react-router-dom";

const Login = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const handleLogin = () => {
    setIsLoggedIn(true);
    redirect("/");
  };
  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
