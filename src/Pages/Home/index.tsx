import { useContext } from "react";
import { AuthContext } from "../../App";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const handleLogin = () => {
    setIsLoggedIn(false);
  };

  const { logout } = useAuth0();

  return (
    <>
      <h1>Home</h1>
      {/* <Link to="/" onClick={handleLogin}>
        Log Out
      </Link> */}

      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
    </>
  );
};

export default Home;
