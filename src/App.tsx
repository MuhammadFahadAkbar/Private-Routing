import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const App = () => {

  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();

  return (
    <BrowserRouter>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Private Routing
            </Typography>
            {isAuthenticated ? (
              <Button
                color="inherit"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </Button>
            ) : (
              <Button color="inherit" onClick={() => loginWithRedirect()}>
                Log In
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" Component={isAuthenticated ? Home : Login} />
        <Route path="/contact" Component={Contact} />
        <Route path="/login" Component={!isAuthenticated ? Login : Home} />
        <Route path="/register" Component={Register} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
