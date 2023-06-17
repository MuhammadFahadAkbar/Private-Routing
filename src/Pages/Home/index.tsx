// import { useContext } from "react";
// import { AuthContext } from "../../App";
// import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

const Home = () => {
  // const { setIsLoggedIn } = useContext(AuthContext);
  // const handleLogin = () => {
  //   setIsLoggedIn(false);
  // };

  return (
    <>
      <Typography variant="h5" component="h5">Home</Typography>
      {/* <Link to="/" onClick={handleLogin}>
        Log Out
      </Link> */}
    </>
  );
};

export default Home;
