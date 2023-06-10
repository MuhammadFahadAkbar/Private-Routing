import { useContext } from "react";
import { AuthContext } from "../../App";
import { Link } from "react-router-dom";

const Home = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const handleLogin = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <h1>Home</h1>
      <Link to="/" onClick={handleLogin}>
        Log Out
      </Link>
    </>
  );
};

export default Home;
