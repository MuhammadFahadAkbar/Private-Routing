import { useContext } from "react";
import { AuthContext } from "../../App";
import { Link } from "react-router-dom";

const Login = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <Link to="/" onClick={handleLogin}>
      Log In
    </Link>
  );
};

export default Login;
